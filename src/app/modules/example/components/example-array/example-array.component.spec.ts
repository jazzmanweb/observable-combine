import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExampleArrayComponent} from './example-array.component';

describe('Example2Component', () => {
  let component: ExampleArrayComponent;
  let fixture: ComponentFixture<ExampleArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
