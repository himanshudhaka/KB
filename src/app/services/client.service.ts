import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private token = this.auth.user$;
  // private headers = { Authorization: this.token };
  private apiUrl: string = 'http://hmaapi.kilobytetech.com/users';
  tokendd = JSON.parse(localStorage.getItem('user') || 'hi');
  header = new HttpHeaders().set('Authorization', this.tokendd.token);
  // console.log(header);
  body = {
    folder: {
      file: 'https://hma-docs.s3.ap-south-1.amazonaws.com/6646b710-4e27-4728-9053-1d2103d3704f.pdf',
      preview:
        'https://hma-docs.s3.ap-south-1.amazonaws.com/7af73066-3818-4866-bb56-ae475b59fcb0.png',
    },
    status: 'completed',
  };
  constructor(private http: HttpClient, private auth: AuthService) {}

  getAll(page: any) {
    return this.http.get<any>(`${this.apiUrl}/?pageNo=${page}&size=20`, {
      headers: this.header,
    });
  }
  oncall(id: any) {
    return this.http.get<any>(
      `http://hmaapi.kilobytetech.com/documents?clientId=${id}&financialYear=2020-2021`,
      { headers: this.header }
    );
  }

  uploaddoc(id: any) {
    console.log(JSON.stringify(this.body));
    return this.http.put<any>(
      `http://hmaapi.kilobytetech.com/documents/${id}`,
      JSON.stringify(this.body),
      { headers: this.header }
    );
  }
}
