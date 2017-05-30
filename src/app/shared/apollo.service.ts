import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { Cookie } from 'ng2-cookies/ng2-cookies';

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql'
});

networkInterface.use([{
    applyMiddleware(req, next) {
        // get cookie token:
        let token;
        if ( Cookie.get('github_token') ) {
          token = Cookie.get('github_token');
        } else {
          token = prompt('Enter API token:', '');
          Cookie.set('github_token', token);
        }
        if (req.options.headers === undefined) {
            req.options.headers = {};
        }
        req.options.headers['authorization'] = token ? ('Bearer ' + token) : null;
        next();
    }
}]);

// Handle response error codes.
networkInterface.useAfter([{
  applyAfterware(res, next) {
    if (res.response.status === 401) {
      throw new Error('Unauthorized');
    }
    if (res.response.status === 500) {
      throw new Error('Server Error');
    }
    next();
  }
}]);

const apolloClient = new ApolloClient({
  networkInterface,
  dataIdFromObject: (o: any) => { return o.__typename + '-' + (o.uuid || o.id)},
});

/**
 * @see https://github.com/apollographql/apollo-angular/issues/142
 */
export function provideApolloClient(): ApolloClient {
  return apolloClient;
}