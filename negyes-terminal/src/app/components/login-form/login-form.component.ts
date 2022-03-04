import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginUser: User = {
    email: '',
    username: '',
    password: '',
    isAdmin: false
  }
  public isValidUser?: boolean;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });  

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.loginUser.username = this.loginForm.value.username;
    this.loginUser.password = this.loginForm.value.password;

    this.loginService.getUsers().subscribe({
      next: (users) => {
        for (const user of users) {
          if(user.username === this.loginUser.username && user.password === this.loginUser.password) {
            this.isValidUser = true;
            this.loginService.setLoggedInUser(user);
            this.router.navigate(['']);

            this.loginService.loggedInUser.subscribe({
              next: (loggedUser) => {console.log(loggedUser)}

            });
          }
        }
        if (!this.isValidUser) {
          console.log("Helytelen belépési adatok!");
        }
      },
      error: (e) => {console.log(e)},
      complete: () => {}
    })
  }

}
