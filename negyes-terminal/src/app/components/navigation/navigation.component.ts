import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isSignedIn: boolean = false;
  public isAdmin: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.loginService.loggedInUser.subscribe({
      next: (user) => {
        if (user) {
          if (user.isAdmin === true) this.isAdmin = true;
          this.isSignedIn = true;
        }
      }
    })
  }

  logout():void {
    this.loginService.logout();
    this.isSignedIn = false;
    this.router.navigate(['login']);
  }

}
