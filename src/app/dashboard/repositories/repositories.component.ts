import { Component, OnInit } from '@angular/core';
import { FyleService } from 'src/app/service/fyle.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  constructor(private fyleService: FyleService) {}
  repos: any = [];
  p: number = 1;
  total: number = 0;
  ngOnInit(): void {
    this.getRepos();
    this.getReposSet(this.p, 10);
  }

  getRepos() {
    this.fyleService.getRepos().subscribe({
      next: (res: any) => {
        console.log(res);
        this.total = res.length;
      },
      error: (e) => {
        console.log('Error in fetching repos', e);
      },
      complete: () => {},
    });
  }

  getReposSet(pageNo: any, items: any) {
    this.fyleService.reposByPagination(pageNo, items).subscribe({
      next: (res: any) => {
        console.log(res);
        this.repos = res;
      },
      error: (e) => {
        console.log('Error in fetching repos', e);
      },
      complete: () => {},
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getReposSet(this.p, 10);
  }
}
