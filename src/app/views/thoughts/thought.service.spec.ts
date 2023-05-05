import { TestBed, getTestBed } from '@angular/core/testing';

import { ThoughtService } from './thought.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ThoughtService', () => {
  let injector;
  let service: ThoughtService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ThoughtService]
    });

    injector = getTestBed();
    service = injector.get(ThoughtService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

