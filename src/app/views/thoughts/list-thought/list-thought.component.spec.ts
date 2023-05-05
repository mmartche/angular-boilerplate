import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ThoughtService } from './../thought.service';
import { ListThoughtComponent } from './list-thought.component';
import { forwardRef } from '@angular/core';

const dummyData = [
  {
    id: 0,
    description: 'string',
    author: 'string',
    case: 'string',
    favorite: false
  }
];

class FakeApiSerivce {
  list() {
    return of(dummyData);
  }
}

xdescribe('ListThoughtComponent', () => {
  let component: ListThoughtComponent;
  let fixture: ComponentFixture<ListThoughtComponent>;

  beforeEach(async () => {
    let injector;
    let service: ThoughtService;
    let httpMock: HttpTestingController;

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ListThoughtComponent],
      providers: [
        { provide: ThoughtService, useClass: FakeApiSerivce }
      ]
    })
      .compileComponents();

    injector = getTestBed();
    service = injector.get(ThoughtService);
    httpMock = injector.get(HttpTestingController);
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ListThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
