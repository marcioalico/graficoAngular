import { Component, OnInit, ViewChild } from '@angular/core';
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
    this.Sucursal1 = new Sucursal("Casa matriz", "Santa Fe", "San Jeronimo 2343", (this.getRandom()));
    this.Sucursal2 = new Sucursal("Sucursal Norte", "Reconquista", "Chacabuco 2333", this.getRandom());
    this.Sucursal3 = new Sucursal("Sucursal Sur", "Rosario", "Ituzaingo 3333", this.getRandom());
    this.Sucursal4 = new Sucursal("Sucursal Oeste", "Rafael", "Pasaje Lopez 2211", this.getRandom());
    this.Sucursal5 = new Sucursal("Sucursal Sur 2", "Rufino", "Moreno 3270", this.getRandom());
  }

  getRandom(): number[]{
    var array = new Array<number>(0,1,2,3,4,5,6,7,8,9,10,11)
    
    array.forEach((value,index) => {
      let n = Math.random() * (200 - 1) + 1;
      array.splice(index, 0, n);
    });

    return array
  }

  ngOnInit(): void {
    this.listadoSucursales = new Array(this.Sucursal1, this.Sucursal2, this.Sucursal3, this.Sucursal4, this.Sucursal5);
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

  }
}