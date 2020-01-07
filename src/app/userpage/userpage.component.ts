import { Component, OnInit } from '@angular/core';
import { ProfileService }from '../profile.service';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  profile;
  repos;
  username: string;

  constructor(private profileService:ProfileService) { 

    // this.profileService.updateProfile(this.username);
    // this.profileService.getProfileInfo().subscribe(profile => {
    //   console.log(profile);
    //   this.profile = profile;
    // });

    // this.profileService.getProfileRepos().subscribe(repos => {
    //   console.log(repos);
    //   this.repos = repos;
    // });

//}
  }


searchProfile(){

    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
    }

    // this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
    // this.profileService.getProfileRepos().subscribe(repos =>  this.repos = repos);



  ngOnInit() {

    this.profileService.updateProfile("DjCooGie");
    this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
    this.profileService.getProfileRepos().subscribe(repos =>  this.repos = repos);

  }

}

