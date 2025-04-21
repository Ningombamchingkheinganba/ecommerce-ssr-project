import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: '',
      loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    // {
    //   path: 'auth',
    // //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    // },
    { path: '**', redirectTo: '' }
  ];
  