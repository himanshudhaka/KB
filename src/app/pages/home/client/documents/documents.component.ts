import { Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first } from 'rxjs';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  docs: any[] = [];
  @Input() id: any;
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  // months:
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
  }
  ngOnInit(): void {
    this.clientService
      .oncall(this.id)
      .pipe(first())
      .subscribe((doc) => {
        this.docs = this.groupbyMonth(doc?.records);

        console.log(this.docs);
      });
  }
  groupbyMonth(arr: any[]) {
    const grp = { 0: [], 1: [], 2: [], 3: [] };
    const res = arr.reduce(
      (grp, current) => {
        console.log(grp);
        const key = `${current.month}`;
        // console.log(key);
        grp[key] = grp[key] || [];
        grp[key].push(current);
        return grp;
      },
      [[], [], [], [], [], [], [], [], [], [], [], []]
    );
    // console.log(res);
    return res;
  }

  upload(id: any) {
    this.clientService
      .uploaddoc(id)
      .pipe(first())
      .subscribe((doc) => {
        console.log(doc);
      });
  }
}
