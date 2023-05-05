import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThoughtService } from './thought.service';
import { ListThoughtComponent } from './list-thought/list-thought.component';
import { ButtonLoadMoreComponent } from './list-thought/button-load-more/button-load-more.component';
import { CreateThoughtComponent } from './create-thought/create-thought.component';
import { DeleteThoughtComponent } from './delete-thought/delete-thought.component';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';
import { ThoughtComponent } from './thought/thought.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [
        ListThoughtComponent,
        CreateThoughtComponent,
        ThoughtComponent,
        DeleteThoughtComponent,
        EditThoughtComponent,
        ButtonLoadMoreComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        ThoughtService
    ],
    exports: [
        ListThoughtComponent,
        CreateThoughtComponent,
        ThoughtComponent,
        DeleteThoughtComponent,
        EditThoughtComponent,
        ButtonLoadMoreComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThoughtModule { }
