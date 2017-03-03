import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions, Response, Headers, ResponseOptions } from '@angular/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectsService } from './projects.service';
import { MockBackend } from '@angular/http/testing';

describe('ProjectsService', () => {

  let service;
  let mockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsService,
        Http,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions}
      ]
    });
  });

  beforeEach(inject([ProjectsService, ConnectionBackend], (s, b) => {
    service = s;
    mockBackend = b;
  }));

  it('should return the list of projects (sync)', () => {
    const body = [{id: 1}, {id: 2}];
    const response = new ResponseOptions( {body} );
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(response));
    });
    service.getProjects().subscribe(x => {
      expect(x).toContain(body[0]);
      expect(x).toContain(body[1]);
      expect(x.length).toBe(2);
    });
  });

  it('should return the list of issues (sync)', () => {
    const body = [{number: 1}, {number: 2}];
    const response = new ResponseOptions( {body} );
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(response));
    });
    service.getProjectIssues('merlosy.github.io', 3).subscribe(x => {
      expect(x).toContain(body[0]);
      expect(x).toContain(body[1]);
      expect(x.length).toBe(2);
    });
  });

  it('should return the issue #3 (sync)', () => {
    const body = {number: 1};
    const response = new ResponseOptions( {body} );
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(response));
    });
    service.getProjectIssues('merlosy.github.io').subscribe(x => {
      expect(x).toEqual(body);
    });
  });

  it('should return the detail of the project', () => {
    const body = {name: 'merlosy.github.io'};
    const response = new ResponseOptions( {body} );
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(response));
    });
    service.getProjectDetails('merlosy.github.io').subscribe(x => {
      expect(x).toEqual(body);
    });
  });

  it('should return an ERROR while the list of projects (sync)', () => {
    const body = {error: 'Boom'};
    const response = new ResponseOptions( {body, status: 400} );
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(response));
    });
    service.getProjects().subscribe(x => {
      expect(false).toBeFalsy();
      expect(x).toEqual(body);
    }, (e: Error) => {
      expect(e).toEqual(body);
    });
  });

});
