import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ListadosucursalesComponent } from '../body/listadosucursales/listadosucursales.component';

@Component({
  selector: 'app-grafico-sucursales',
  templateUrl: './grafico-sucursales.component.html',
  styleUrls: ['./grafico-sucursales.component.css']
})

export class GraficoSucursalesComponent implements OnInit {

  listadoSucursales = new ListadosucursalesComponent;

  public lineChartData: ChartDataSets[] = [
      { data: this.listadoSucursales.Sucursal1.ventas, label: this.listadoSucursales.Sucursal1.nombre },
      { data: this.listadoSucursales.Sucursal2.ventas, label: this.listadoSucursales.Sucursal2.nombre },
      { data: this.listadoSucursales.Sucursal3.ventas, label: this.listadoSucursales.Sucursal3.nombre },
      { data: this.listadoSucursales.Sucursal4.ventas, label: this.listadoSucursales.Sucursal4.nombre }
    ] ;

  public dataSet: ChartDataSets[] = [{ data: [] }]

  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public lineChartOptions: (ChartOptions & { }) = {
    responsive: true,
    maintainAspectRatio: false
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];



  constructor() { }

  ngOnInit(): void {

    function getMesesValues(): number[] {
      var mesesValues: number[]
      var i = 1
        this.listadoSucursales.array.forEach(element => {
          mesesValues.push(element.getVentasMes(i))
          i+=1;
        });
      return mesesValues 
    }

    let mesesValues = getMesesValues()

    this.lineChartData = [
      { data: mesesValues },
    ];


  }

}
