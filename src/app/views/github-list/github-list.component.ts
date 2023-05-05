import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, map, filter, catchError, EMPTY } from 'rxjs';

import { GithubService } from '../../shared/github/github.service';
import { GitHubInfoInfo } from 'src/app/shared/github/githubInfo';
import { GitHubResults, User } from 'src/app/shared/github/github.interface';

@Component({
  selector: 'app-github-list',
  templateUrl: './github-list.component.html',
  styleUrls: ['./github-list.component.sass']
})

export class GithubListComponent implements OnInit {

  search = new FormControl();
  githubResultAPI: GitHubResults;
  // usersList!: Observable<User[]>;

  constructor(
    private github: GithubService
  ) { }
  ngOnInit() {
    // this.usersList$ = this.github.getUsers();
  }

  usersList$ = this.search.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    filter((valueTyped) => valueTyped.length >= 3),
    switchMap((valueTyped) => this.github.search('users', valueTyped)),
    map(resultAPI => this.githubResultAPI = resultAPI),
    map(resultado => resultado.items ?? []),
    map((items) => this.resultToResult(items)),
    catchError(() => {
      return EMPTY
      // return throwError(() => new Error(this.mensageError = 'Ops...'))
    })
  )

  resultToResult(items: User[]): GitHubInfoInfo[] {
    return items.map(item => {
      return new GitHubInfoInfo(item);
    })
  }
}
