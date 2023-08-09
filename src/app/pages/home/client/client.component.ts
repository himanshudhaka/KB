import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  loading = false;
  users?: any[];
  current_page: number = 1;
  per_page: number = 20;
  total_page: number = 2;
  total: number = 32;
  metaData?: any[];
  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.clientService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.loading = false;
        this.metaData = users.metaData;
        this.users = users.records;
      });
  }

  onClick(id: any) {
    this.router.navigateByUrl(`home/clients/${id}/documents`);
  }
}
