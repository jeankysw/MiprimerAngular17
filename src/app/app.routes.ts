import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"home",
        loadComponent:() => import("./home/home.component"),
        children:[

            {
                path:"articulos",
                title:"Articulos",
                loadComponent:() => import("./page/articulos/articulos.component"),
            },
            {
                path:"pagos",
                title:"Pagos",
                loadComponent:() => import("./page/pagos/pagos.component"),
            },
            {
                path:"planes",
                title:"Planes",
                loadComponent:() => import("./page/planes/planes.component"),
            },
            {
                path:"pagar",
                title:"Tarjeta",
                loadComponent:() => import("./page/tarjeta/tarjeta.component"),
            },
            {
                path: 'Detalles/:id',
                title:"ProcuctosDetalles",
                loadComponent:() => import("./page/product-details/product-details.component"),
            },


        ]

    },

    {
        path:"",
        redirectTo:"/home/articulos",
        pathMatch:"full"
    }

];
