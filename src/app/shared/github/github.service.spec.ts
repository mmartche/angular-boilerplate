import { TestBed, getTestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';

import { GithubService } from './github.service';
import { User } from './github-api.model';

describe('GithubService', () => {
  let injector;
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });

    injector = getTestBed();
    service = injector.get(GithubService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getUsers', () => {
    it('should return an Observable<User[]>', () => {
      const dummyUsers: User[] = [
        new User(0, 'John'),
        new User(1, 'Doe')
      ];

      service.getUsers().subscribe(users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyUsers);
      });

      const req = httpMock.expectOne(`${service.API_URL}/users`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    });
  });

  describe('#search', () => {
    const dummyParams = 'martche';

    it('should throw an error if trying to search for not supported `what`', () => {
      service.search('unknown', dummyParams)
        .subscribe(() => {}, err => {
          expect(err).toBe(`Searching for unknown is not supported. The available types are: ${service.WHAT.join(', ')}.`);
        });

      const req = httpMock.expectNone(`${service.API_URL}/search/users?q=martche`);
    });

    it('should return an Observable<SearchResults>', () => {
      service.search('users', dummyParams)
        .subscribe(result => {
          expect(result.items.length).toBe(2);
        });

      const req = httpMock.expectOne(`${service.API_URL}/search/users?q=martche`);
      expect(req.request.url).toBe(`${service.API_URL}/search/users`);
      // expect(req.request.params).toEqual(dummyParams);

      req.flush({
        incomplete_results: false,
        items: [{}, {}],
        total_count: 2
      });
    });
  });

});