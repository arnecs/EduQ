import {Component, OnInit, OnChanges} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {isLoggedin} from '../main/is-loggedin';
import {AuthService} from '../../services/auth.service';
import {Subject} from '../../interfaces/subject';
import {SubjectsComponent} from '../subjects/subjects';
import {LoggedInRouterOutlet} from '../../common/LoggedInOutlet';
import {User} from '../../interfaces/user';

@Component({
  selector: 'siteheader',
  templateUrl: 'app/components/siteheader/siteheader.html',
  directives: [SubjectsComponent, ROUTER_DIRECTIVES],
  inputs: ['subjects']
})

export class SiteHeaderComponent implements OnInit {
  user: User;

  constructor(public router: Router, public auth: AuthService) {
  }
  checkLogin() {
    return isLoggedin();
  }

  ngOnInit() {


    this.auth.authenticated$.subscribe((val) => {
      if (val) {
        this.auth.getUser().then((user) => {
          this.user = user;
        }).catch((err) => {});
      } else {
        this.user = null;
      }
    });


  }



  onLogout() {
    this.auth.logout();
    this.user = null;
    this.router.navigate(['LoginPath'])

  }
}
