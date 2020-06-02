import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosucursalesComponent } from './listadosucursales.component';

describe('ListadosucursalesComponent', () => {
  let component: ListadosucursalesComponent;
  let fixture: ComponentFixture<ListadosucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadosucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
