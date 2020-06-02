import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../classes/sucursal';
import { Mes } from '../../classes/mes';

@Component({
  selector: 'app-listadosucursales',
  templateUrl: './listadosucursales.component.html',
  styleUrls: ['./listadosucursales.component.css']
})
export class ListadosucursalesComponent implements OnInit {
  public listadoSucursales: Array<Sucursal>;
  public Sucursal1: Sucursal;
  public Sucursal2: Sucursal;
  public Sucursal3: Sucursal;
  public Sucursal4: Sucursal;
  public Sucursal5: Sucursal;

  public Meses: Array<Mes>;

  constructor() {

  }

  ngOnInit(): void {
    this.Meses = new Array(new Mes("",0),
                           new Mes("Enero",31),
                           new Mes("Febrero",28),
                           new Mes("Marzo",31),
                           new Mes("Abril",30),
                           new Mes("Mayo",31),
                           new Mes("Junio",30),
                           new Mes("Julio",31),
                           new Mes("Agosto",31),
                           new Mes("Septiembre",30),
                           new Mes("Octubre",31),
                           new Mes("Noviembre",30),
                           new Mes("Diciembre",31));

    this.Sucursal1 = new Sucursal("Casa matriz", "Santa Fe", new Array(0,10,0,0,0,0,0,0,0,0,0,0,0));
    this.Sucursal2 = new Sucursal("Sucursal Norte", "Reconquista", new Array(0,120,0,0,0,0,0,0,0,0,0,0,0));
    this.Sucursal3 = new Sucursal("Sucursal Sur", "Rosario", new Array(0,30,0,0,0,0,0,0,0,0,0,0,0));
    this.Sucursal4 = new Sucursal("Sucursal Oeste", "Rafael", new Array(0,40,0,0,0,0,0,0,0,0,0,0,0));
    this.Sucursal5 = new Sucursal("Sucursal Sur 2", "Rufino", new Array(0,50,0,0,0,0,0,0,0,0,0,0,0));
    this.listadoSucursales = new Array(this.Sucursal1, this.Sucursal2, this.Sucursal3, this.Sucursal4, this.Sucursal5);



  }

}
