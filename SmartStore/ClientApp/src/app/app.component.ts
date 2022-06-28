import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'app';
  portatil = {
    marca: 'Lenovo',
    fechaLanzamiento: new Date(),
  precio: 1440.44
};
  duplicarNumero(valor: number): number {
    return valor * 2;

   
  }
}
