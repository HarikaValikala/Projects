import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData = {};
  
  loginAuth: any;
  constructor(private _login: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    debugger;
    return this._login.login(this.loginData).subscribe(res => {
      this.loginAuth = res;
      localStorage.setItem('token', this.loginAuth.token);
      this.router.navigate(['pipes']);
    })
  }

}
