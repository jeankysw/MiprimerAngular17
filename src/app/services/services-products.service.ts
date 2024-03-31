import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesProductsService {

  productos:any=[
    {id:"1",Image:"../../../assets/descarga.jpeg ",NameProducto:"Buzo Gucci"},
    {id:"2",Image:"../../../assets/descarga.jpeg ",NameProducto:"Buzo Gucci"},
    {id:"3",Image:"../../../assets/descarga.jpeg ",NameProducto:"Buzo Gucci"},
    {id:"4",Image:"../../../assets/descarga.jpeg ",NameProducto:"Buzo Gucci"},
    {id:"5",Image:"../../../assets/descarga.jpeg ",NameProducto:"Buzo Gucci"},
    {id:"6",Image:"../../../assets/descarga.jpeg ",NameProducto:"Buzo Gucci"},
    {id:"7",Image:"../../../assets/descarga.jpeg ",NameProducto:"Buzo Gucci"},
    {id:"8",Image:"../../../assets/descarga.jpeg ",NameProducto:"Buzo Gucci"},
   
]
  productosCarritosComprar:any=[]
}

