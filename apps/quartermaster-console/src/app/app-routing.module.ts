import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { FailedComponent } from './failed/failed.component';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('@cosmos/user-profiles').then(m => m.UserProfilesModule),
    canActivate: [MsalGuard]
  },
  {
    path: 'profile',
    canActivateChild: [MsalGuard],
    children: [
      {
        path: 'detail',
        loadChildren: () => import('@cosmos/user-profiles').then(m => m.UserProfilesModule),
      }
    ]
  },
  {
    path: 'login-failed',
    component: FailedComponent
  },
  {
    path: '',
    loadChildren: () => import('@cosmos/pages').then(m => m.PagesModule)
  },
  {
    path: '**',
    loadChildren: () => import('@cosmos/pages').then(m => m.PagesModule)
  }
];

const isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled' // Remove this line to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
