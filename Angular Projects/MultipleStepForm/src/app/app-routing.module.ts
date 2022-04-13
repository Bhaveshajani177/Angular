import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'candidate',
    loadChildren: () =>
      import('./modules/candidates/candidates.module').then(
        (m) => m.CandidatesModule
      ),
  },
  {
    path: '',
    redirectTo: 'candidate',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
