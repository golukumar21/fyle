import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FyleService {
  private fyle = environment.FYLE_GIT;
  constructor(private http: HttpClient) {}

  getUserDetails() {
    return this.http.get(this.fyle.userDetails);
  }

  reposByPagination(pageNo: any, items: any) {
    return this.http.get(this.fyle.repos + '?order=desc&page='+pageNo+'&per_page='+items);
  }

  getRepos() {
    return this.http.get(this.fyle.repos);
  }
}
