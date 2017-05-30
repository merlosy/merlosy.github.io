/**
 * @see https://github.com/apollographql/apollo-angular/tree/master/examples/hello-world/src/graphql
 * @see https://developer.github.com/v4/guides/forming-calls/#example-query
 * @see https://alligator.io/angular/getting-started-graphql-apollo/
 */

export interface RepositoriesQuery {
  user: {
     repositories: {
        nodes: Array< {
          name: string,
          description: string | null,
          url: string | null,
          homepageUrl: string | null,
          isFork: boolean
       }>
    }
  }
}
