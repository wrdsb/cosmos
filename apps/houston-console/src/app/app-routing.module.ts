import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from "@angular/fire/auth-guard";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

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

  { path: 'google/groups', loadChildren: () => import('./google-groups/google-groups.module').then(m => m.GoogleGroupsModule) },
  { path: 'loops', loadChildren: () => import('./loops/loops.module').then(m => m.LoopsModule) },

  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
