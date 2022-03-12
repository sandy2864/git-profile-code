import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private username: string;
  private clientid = '';
  private clientsecret = '';

  constructor(private http: HttpClient) {
    console.log("service is fuckin' ready!!");
    this.username = 'egoist ';
  }
  getProfileInfo() {
    return this.http
      .get('https://api.github.com/users/' + this.username) //client id for later
      .pipe(map((res: any) => res));
  }
  getProfileRepos() {
    return this.http
      .get('https://api.github.com/users/' + this.username + '/repos') //client id for later
      .pipe(map((res: any) => res));
  }
}
