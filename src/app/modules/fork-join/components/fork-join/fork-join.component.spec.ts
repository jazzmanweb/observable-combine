import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ForkJoinComponent} from './fork-join.component';

describe('Example2Component', () => {
  let component: ForkJoinComponent;
  let fixture: ComponentFixture<ForkJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
