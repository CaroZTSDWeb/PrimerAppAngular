import { Component } from '@angular/core';
import { Product } from '../Interfaces/products';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  mostrarLista: boolean = false;

  productsList: Product[] = [
   
    { nombre: 'Lipstick', costo: 'ARS 1700' },
    { nombre: 'Eyeliner', costo: 'ARS 1100' },
    { nombre: 'Concealer', costo: 'ARS 2000' },
    { nombre: 'Fundation', costo: 'ARS 2500' },
    // Agregar más.
  ];

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

}
