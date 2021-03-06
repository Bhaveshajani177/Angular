import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'routingExampleApp';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  navigate() {
    this.router.navigateByUrl('/login');
    // this.router.navigate(['/login']);
  }
}
