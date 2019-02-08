import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExampleArrayInTimeComponent} from './example-array-in-time.component';

describe('Example2Component', () => {
  let component: ExampleArrayInTimeComponent;
  let fixture: ComponentFixture<ExampleArrayInTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleArrayInTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleArrayInTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
