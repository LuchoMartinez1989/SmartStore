import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.portatiles = [
        {
          marca: 'Lenovo',
          fechaLanzamiento: new Date(),
          precio: 1440.44
        },
        {
          marca: 'Asus',
          fechaLanzamiento: new Date('2016-06-05'),
          precio: 1440.44
        }
      ]

    }, 3000);
 
  }



  title = 'app';
  portatiles;
  duplicarNumero(valor: number): number {
    return valor * 2;

   
  }
}
