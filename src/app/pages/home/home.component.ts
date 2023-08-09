import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
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
}
