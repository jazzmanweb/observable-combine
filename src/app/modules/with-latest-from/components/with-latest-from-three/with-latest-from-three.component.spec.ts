import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WithLatestFromThreeComponent} from './with-latest-from-three.component';

describe('Example2Component', () => {
  let component: WithLatestFromThreeComponent;
  let fixture: ComponentFixture<WithLatestFromThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithLatestFromThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithLatestFromThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
