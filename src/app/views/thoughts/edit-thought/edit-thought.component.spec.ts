import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThoughtComponent } from './edit-thought.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';


xdescribe('EditThoughtComponent', () => {
  let component: EditThoughtComponent;
  let fixture: ComponentFixture<EditThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditThoughtComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
      providers: [EditThoughtComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
