import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ProjectsService {

  // const PREFIX = 'https://api.github.com/',
  private readonly PREFIX = 'https://api.github.com/';
  private headers: HttpHeaders;

  /**
   * @see https://developer.github.com/v3/
   */
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Accept', 'application/vnd.github.v3+json');
  }

  /**
   * Get "merlosy" projects
   * @see https://developer.github.com/v3/repos/#list-user-repositories
   */
  getProjects(sort: string, type: string): Observable<any[]> {
    const params = new HttpParams()
      .set('sort', sort)
      .set('type', type);
    const options = {
        headers: this.headers,
        search: params
    };
    return this.http.get('https://api.github.com/users/merlosy/repos', options).pipe(
      map(res => res as any[]),
      catchError((error => this.handleError(error)))
    );
  }

  getProjectIssues(projectId: string, issueId?: number): Observable<any[]> {
    const options = { headers: this.headers };
    return this.http.get(`https://api.github.com/repos/merlosy/${projectId}/issues${issueId ? '/' + issueId : ''}`, options).pipe(
      map(res => res as any[]),
      catchError((error => this.handleError(error)))
    );
  }

  getProjectDetails(projectId: string): Observable<any[]> {
    const options = { headers: this.headers };
    return this.http.get(`https://api.github.com/repos/merlosy/repos/${projectId}`, options).pipe(
      map(res => res as any[]),
      catchError((error => this.handleError(error)))
    );
  }

  private handleError (error: HttpErrorResponse | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof HttpErrorResponse) {
      const err = error.message || JSON.stringify(error);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return new ErrorObservable(errMsg);
  }

}
