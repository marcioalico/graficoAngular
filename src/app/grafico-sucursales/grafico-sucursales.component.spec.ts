import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSucursalesComponent } from './grafico-sucursales.component';

describe('GraficoSucursalesComponent', () => {
  let component: GraficoSucursalesComponent;
  let fixture: ComponentFixture<GraficoSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
