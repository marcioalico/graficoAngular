import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.holaMundo("este es un mensaje de prueba");
  }

  holaMundo(mensaje):string {
    console.log(mensaje);
    return(mensaje);
  }
}
