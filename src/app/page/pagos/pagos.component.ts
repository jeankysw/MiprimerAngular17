import { Component, NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
 
})
export default class PagosComponent {
 
   title = "Pagos"

   namepordefecto:String ="JEAN PEREZ"
   name=""
   numberpordefecto:String ="0000 0000 0000 0000"
   number = ""  
   mespordefecto ="09"
   mes=""
   anospordefecto ="07"
   anos=""
   cvcpordefecto="433"
   cvc=""
   hayletra=false

  mostarName(name:String){
    this.name = this.name.toUpperCase();
  }  
  mostarNumber(event:any){
  let hayletra =/[a-zA-Z]/.test(this.number)
    if(hayletra==true){
      hayletra=true
    }else{
      this.number = this.number.replace(/\s/g,"").replace(/([0-9]{4})/g, "$1 ")
    }
   
  }  


  
}
