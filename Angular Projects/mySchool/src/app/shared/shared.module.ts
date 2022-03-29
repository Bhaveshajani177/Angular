import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedRoutingModule } from './shared-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { StudentComponent } from './components/dashboard/student/student.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DashboardComponent, AdminComponent, StudentComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class SharedModule {}
