import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
ngOnInit(): void {
  const carritoCompra = document.querySelector('.content-carritos-compras') as HTMLElement;
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (!carritoCompra.contains(target)) {
      carritoCompra.style.backgroundColor = 'lightblue'; 
    }
  });
  
}
  public MenuItem = routes.map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(":"))
  carritoCompra :boolean=false
  mostrarCarritoCompras() {
    const carritoCompra = document.querySelector('.content-carritos-compras') as HTMLElement;
    if (!this.carritoCompra) {
      carritoCompra.style.marginRight = '350px';
      this.carritoCompra = true;
    } else {
      carritoCompra.style.marginRight = '-650px';
      this.carritoCompra = false;
    }
    
  }
  EnviarApagos(){
    
  }
}
