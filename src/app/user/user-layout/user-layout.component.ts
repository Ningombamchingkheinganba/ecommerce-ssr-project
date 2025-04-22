import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-layout',
  imports: [ RouterOutlet, FooterComponent,MatIconModule],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {

}
