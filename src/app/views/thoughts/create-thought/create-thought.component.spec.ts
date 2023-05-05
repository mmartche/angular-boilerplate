import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThoughtComponent } from './create-thought.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('CreateThoughtComponent', () => {
  let component: CreateThoughtComponent;
  let fixture: ComponentFixture<CreateThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormGroup,
        ReactiveFormsModule
      ],
      declarations: [CreateThoughtComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
