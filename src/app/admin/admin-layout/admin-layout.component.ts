import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Route, Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [ MatIconModule, RouterOutlet, RouterLinkActive, RouterModule],
  standalone:true,
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  constructor(private router: Router) {}

}
