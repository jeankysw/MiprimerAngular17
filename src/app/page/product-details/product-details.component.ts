import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesProductsService } from '../../services/services-products.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export default class ProductDetailsComponent {
  constructor(private productService: ServicesProductsService,private route: ActivatedRoute,private router: Router,) {}
  productos:any=this.productService.productos
  ocultarmenu() {
    this.route.params.subscribe(params => {
      const index = params['index'];
      console.log('Índice recuperado:', index);
      
    }); 
    const carritoCompra = document.querySelector('.content-carritos-compras') as HTMLElement;
        carritoCompra.style.marginRight = '-650px';
     
  }


cambiarcolor(divNumber: number) {
    const selectedDiv = document.querySelector('.container-color') as HTMLElement;
    const selectedDiv2 = document.querySelector('.container-color1') as HTMLElement;
    const selectedDiv3 = document.querySelector('.container-color2') as HTMLElement;
    if (divNumber === 1 && selectedDiv) {
      selectedDiv.style.border = '2px solid gray'; 
      selectedDiv2.style.border = 'none'; 
      selectedDiv3.style.border = '1px solid gray'; 
    }
    if (divNumber === 2 && selectedDiv) {
      selectedDiv2.style.border = '2px solid gray';
      selectedDiv.style.border = 'none'; 
      selectedDiv3.style.border = '1px solid gray'; 
    }
    if (divNumber === 3 && selectedDiv) {
      selectedDiv3.style.border = '2px solid gray'; 
      selectedDiv2.style.border = 'none'; 
      selectedDiv.style.border = 'none'; 
    };

}
selecionarTalla(num:number){
  const tallaM = document.querySelector('.container-talla') as HTMLElement;
  const tallaXL = document.querySelector('.container-talla1') as HTMLElement;
  const tallaS = document.querySelector('.container-talla2') as HTMLElement;
  if (num === 1 && tallaM) {
    tallaM.style.border = '2px solid #1403ff'; 
    tallaXL.style.border = 'solid 1px rgb(163, 163, 163)'; 
    tallaS.style.border = 'solid 1px rgb(163, 163, 163)'; 
  }
  if (num === 2 && tallaM) {
    tallaM.style.border = 'solid 1px rgb(163, 163, 163)'; 
    tallaXL.style.border = '2px solid #1403ff'; 
    tallaS.style.border = 'solid 1px rgb(163, 163, 163)'; 
  }
  if (num === 3 && tallaM) {
    tallaM.style.border = 'solid 1px rgb(163, 163, 163)'; 
    tallaXL.style.border = 'solid 1px rgb(163, 163, 163)'; 
    tallaS.style.border = '2px solid #1403ff'; 
  }
}
ratings = [
  { stars: 5, percentage: 60 },
  { stars: 4, percentage: 30 },
  { stars: 3, percentage: 8 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 0 }
];
VerProductosdetalles(index: number) {
  this.router.navigate(['home', 'Detalles',index]);
}
productosss:any=[
  {id:"1",Image:"../../../assets/descarga.jpeg ",NameProducto:"Buzo Gucci" ,Descripcion:" Este buzo es la combinación perfecta de comodidad y estilo. Fabricado con materiales de altacalidad, este buzo te mantendrá abrigado y a la moda en cualquier ocasión. Su diseño moderno y versátil lo convierte en una prenda imprescindible en tu armario"},
]
imagenn="../../../assets/descarga.jpeg"
imagencambiaraarray:any=[
  {imagenc:"/assets/aaaa.jfif"},
  {imagenc:"/assets/OIP (1).jfif"},

]
cambiarimagen(indexw:number){
   this.imagenn=this.imagencambiaraarray[indexw].imagenc
}

}
