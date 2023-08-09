import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  show = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {}
  clients() {
    this.router.navigate(['clients'], { relativeTo: this.route });
  }
  documents() {
    this.router.navigate(['documents'], { relativeTo: this.route });
  }
  others() {
    this.router.navigate(['others'], { relativeTo: this.route });
  }
  onClick() {
    this.show = !this.show;
  }
  logout() {
    this.authService.logout();
  }
}
