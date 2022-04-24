import { Component, OnInit } from '@angular/core';
import { FyleService } from 'src/app/service/fyle.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  name: string = '';
  bio: string = '';
  location: string = '';
  twitter: string = '';
  repoUrl: string = '';
  userImg: string = '../../assets/images/user.png';
  constructor(private fyleService: FyleService) { }

  ngOnInit(): void {
    this.getUserDetails();
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

}
