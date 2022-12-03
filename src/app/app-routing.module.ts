import { NgModule } from '@angular/core';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',...canActivate(() => redirectLoggedInTo(['/kallona/home'])), 
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',...canActivate(() => redirectLoggedInTo(['/kallona/home'])), 
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'kallona', ...canActivate(() => redirectUnauthorizedTo(['/login'])),
    loadChildren: () => import('./kallona/kallona.module').then( m => m.KallonaPageModule)
  },
  {
    path: 'adminproducto',
    loadChildren: () => import('./adminproducto/adminproducto.module').then( m => m.AdminproductoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
