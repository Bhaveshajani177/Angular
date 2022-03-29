import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../core/services/auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from '../core/services/auth/role-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { StudentComponent } from './components/dashboard/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'admin',
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: 'admin' },
      },
      {
        path: 'student',
        component: StudentComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: 'student' },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
