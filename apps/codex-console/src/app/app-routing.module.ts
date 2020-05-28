import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from "@angular/fire/auth-guard";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { HappyComponent } from './happy/happy.component';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome}
  },

  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },

  { path: 'home',   component: HomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'happy',  component: HappyComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },

  { path: '',   redirectTo: 'home', pathMatch: 'full', canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: '**', redirectTo: 'home', pathMatch: 'full', canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },

  //{ path: 'admin',        component: AdminComponent,    ...canActivate(adminOnly) },
  //{ path: 'accounts/:id', component: AdminComponent,    ...canActivate(belongsToAccount) }

  //{ path: 'login',        component: LoginPageComponent,  ...canActivate(redirectLoggedInToHome) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
