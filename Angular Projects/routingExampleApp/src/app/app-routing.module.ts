import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'profile',
  //   children: [
  //     {
  //       // path: ':id/:name',
  //       path: ':id',
  //       component: UserProfileComponent,
  //     },
  //   ],
  // },
  {
    path: 'profile',
    loadChildren: () =>
      import('./user/user-routing.module').then(
        (module) => module.UserRoutingModule
      ),
  },
  {
    path: '**',
    redirectTo: 'pageNoteFound',
  },
  {
    path: 'pageNoteFound',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
