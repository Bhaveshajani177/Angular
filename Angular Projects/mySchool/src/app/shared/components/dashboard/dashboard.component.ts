import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  pathName!: string;
  showSideBar = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
  logout() {}
}
