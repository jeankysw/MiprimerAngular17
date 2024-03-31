import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesProductsService } from '../../services/services-products.service'; 

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export default class ArticulosComponent  {

  constructor(private router: Router,private productService: ServicesProductsService) {}
  VerProductosdetalles(index: number) {
    this.router.navigate(['home', 'Detalles',index]);
  }
  productos:any=this.productService.productos
}

