import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  pathName!: string;
  showSideBar = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
    // get activeted router path
    this.pathName = this.router.url;
  }

  ngOnInit(): void {
    //sideBar toggle
    document
      .getElementById('sidebarCollapse')
      ?.addEventListener('click', this.toggle);
  }

  // toggle sidebar method
  toggle() {
    document.getElementById('sidebar')?.classList.toggle('active');
  }

  // logout method
  logout() {
    try {
      this.authService
        .logout()
        .then(async (res) => {
          this._snackBar.open('You have successfully logged out', 'ok', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });

          // clear token and role
          await localStorage.removeItem('token');
          await localStorage.removeItem('role');

          this.router.navigate(['auth/login']);
        })
        .catch((error: Error) => {
          this._snackBar.open(error.message, 'ok', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });
        });
    } catch (error: any) {
      this._snackBar.open(error, 'ok', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
      });
    }
  }
}
