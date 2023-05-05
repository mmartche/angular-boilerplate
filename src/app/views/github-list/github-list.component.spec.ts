import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { GithubListComponent } from './github-list.component';
import { GithubService } from '../../shared/github/github.service';

const dummyUsers = [
  { login: 'martche' }
];

class FakeGithubApiSerivce {
  getUsers() {
    return of(dummyUsers);
  }
}

describe('GithubListComponent', () => {
  let component: GithubListComponent;
  let fixture: ComponentFixture<GithubListComponent>;

  beforeEach(async () => {
    let injector;
    let github: GithubService;

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [GithubListComponent],
      providers: [
        { provide: GithubService, useClass: FakeGithubApiSerivce }
      ]
    })
      .compileComponents();

    injector = getTestBed();
    github = injector.get(GithubService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should load the first users of GitHub', () => {
    component.usersList$.subscribe(users => {
      expect(users.length).toBe(0);
      expect(users).toEqual(dummyUsers);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});