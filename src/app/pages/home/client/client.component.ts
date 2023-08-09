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
  pre = false;
  next = false;
  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.clientService
      .getAll(this.current_page)
      .pipe(first())
      .subscribe((users) => {
        this.loading = false;
        this.current_page = users._metaData?.page;
        this.per_page = users._metaData?.per_page;
        this.total_page = users._metaData?.page_count;
        this.total = users._metaData?.total_count;
        console.log(users._metaData);
        this.users = users.records;
      });
  }

  onClick(id: any) {
    this.router.navigateByUrl(`home/clients/${id}/documents`);
  }
  onClicked(page: number) {
    console.log(page);
    this.clientService
      .getAll(page)
      .pipe(first())
      .subscribe((users) => {
        this.loading = false;
        this.current_page = users._metaData?.page;
        this.per_page = users._metaData?.per_page;
        this.total_page = users._metaData?.page_count;
        this.total = users._metaData?.total_count;
        console.log(users._metaData);
        this.users = users.records;
      });
  }
}
