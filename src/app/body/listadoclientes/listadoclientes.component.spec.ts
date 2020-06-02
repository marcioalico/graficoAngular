import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoclientesComponent } from './listadoclientes.component';

describe('ListadoclientesComponent', () => {
  let component: ListadoclientesComponent;
  let fixture: ComponentFixture<ListadoclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
