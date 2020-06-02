import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextstepsComponent } from './nextsteps.component';

describe('NextstepsComponent', () => {
  let component: NextstepsComponent;
  let fixture: ComponentFixture<NextstepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextstepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
