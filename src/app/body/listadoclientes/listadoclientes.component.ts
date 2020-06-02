import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../classes/cliente';

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrls: ['./listadoclientes.component.css']
})
export class ListadoclientesComponent implements OnInit {
  public listaClientes:Array<Cliente>;
  public cliente1: Cliente;
  public cliente2: Cliente;
  public cliente3: Cliente;
  public cliente4: Cliente;
  public cliente5: Cliente;

  constructor() { }

  ngOnInit(): void {
    this.cliente1 = new Cliente("Marcio", 25, true);
    this.cliente2 = new Cliente("Agustín", 19, true);
    this.cliente3 = new Cliente("Gastón", 25, true);
    this.cliente4 = new Cliente("Adriel", 24, true);
    this.cliente5 = new Cliente("Damián", 35, true);

    this.listaClientes = [this.cliente1,
                          this.cliente2,
                          this.cliente3,
                          this.cliente4,
                          this.cliente5];
  }

}
