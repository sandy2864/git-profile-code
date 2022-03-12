import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  totalRec: any;
  page: any;

  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos = repos;
      this.totalRec = repos.length;
      console.log(this.totalRec);
    });
  }

  ngOnInit(): void {}
}
