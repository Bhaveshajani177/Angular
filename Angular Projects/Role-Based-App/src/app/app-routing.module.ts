import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RouteGuardService } from './core/services/route-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate: [RouteGuardService],
    data: { roleType: 'admin@gmail.com' },
    loadChildren: () =>
      import('./modules/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: 'general',
    loadChildren: () =>
      import('./modules/general/general.module').then((m) => m.GeneralModule),
  },
  {
    path: 'management',
    canActivate: [RouteGuardService],
    data: { roleType: 'management@gmail.com' },
    loadChildren: () =>
      import('./modules/management/management.module').then(
        (m) => m.ManagementModule
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
