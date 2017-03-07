import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProjectsService {

  // const PREFIX = 'https://api.github.com/',
  private readonly PREFIX = 'https://api.github.com/';
  private headers: Headers;

  /**
   * @see https://developer.github.com/v3/
   */
  constructor(private http: Http) {
    this.headers = new Headers();
    // this.headers.append('Accept', 'application/vnd.github.v3+json');
    this.headers.append('Accept', 'application/vnd.github.inertia-preview+json');
    this.headers.append('Authorization', 'token 25deeb8c575b8a013668bd3df1ebbba2856b2349');
  }

  /**
   * Get "merlosy" projects
   * @see https://developer.github.com/v3/projects/#list-organization-projects
   */
  getProjects(): Observable<any[]> {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get('https://api.github.com/users/merlosy/repos', options)
                    .map(res => res.json() as any[]);
  }

  getProjectIssues(projectId: string, issueId?: number): Observable<any[]> {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(`https://api.github.com/repos/merlosy/${projectId}/issues${issueId ? '/' + issueId : ''}`, options)
                    .map(res => res.json() as any[]);
  }

  getProjectDetails(projectId: string): Observable<any[]> {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(`https://api.github.com/repos/merlosy/${projectId}`, options)
                    .map(res => res.json() as any[]);
  }

  // private handleError (error: Response | any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
