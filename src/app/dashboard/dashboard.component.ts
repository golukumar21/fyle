import { Component, OnInit } from '@angular/core';
import { FyleService } from '../service/fyle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private fyleService: FyleService) {}
  name: string = '';
  bio: string = '';
  location: string = '';
  twitter: string = '';
  repoUrl: string = '';
  userImg: string = '../../assets/images/user.png';

  ngOnInit(): void {
    this.getUserDetails();
    this.getAllRepos();
  }

  getUserDetails() {
    this.fyleService.getUserDetails().subscribe({
      next: (res: any) => {
        console.log(res);
        this.name = res['name'];
        this.bio = res['bio'];
        this.location = res['location'];
        this.twitter = res['twitter_username'];
        this.repoUrl = res['url'];
        this.userImg = res['avatar_url'];
      },
      error: (e) => {
        console.log('Error in fetching user details', e);
      },
      complete: () => {},
    });
  }

  getAllRepos() {
    this.fyleService.getRepos().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (e) => {
        console.log('Error in fetching user respositories', e);
      },
      complete: () => {},
    });
  }
}
