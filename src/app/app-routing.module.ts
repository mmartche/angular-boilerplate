import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './views/thoughts/create-thought/create-thought.component';
import { EditThoughtComponent } from './views/thoughts/edit-thought/edit-thought.component';
import { ListThoughtComponent } from './views/thoughts/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './views/thoughts/delete-thought/delete-thought.component';
import { GithubListComponent } from './views/github-list/github-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'listThought',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent
  },
  {
    path: 'listThought',
    component: ListThoughtComponent
  },
  {
    path: 'thoughts/editThought/:id',
    component: EditThoughtComponent
  },
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'github',
    component: GithubListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
