import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../shared/menu/menu.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,MenuComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
