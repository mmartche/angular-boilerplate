import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { GithubListComponent } from './github-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [GithubListComponent],
  exports: [GithubListComponent]
})
export class GithubListModule { }
export class GithubModule { }