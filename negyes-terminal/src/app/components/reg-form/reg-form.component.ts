import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  public regUser: User = {
    email: '',
    username: '',
    password: '',
    isAdmin: false
  }

  regForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });  

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.regUser.email = this.regForm.value.email;
    this.regUser.username = this.regForm.value.username;
    this.regUser.password = this.regForm.value.password;

    this.loginService.addUser(this.regUser).subscribe({
      next: () => { this.router.navigate(['login'])},
      error: (e) => {console.log(e)},
      complete: () => {}
    });
  }

}
