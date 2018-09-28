import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register = {};
  registerData: any;
  registerDetails: any;

  constructor(private registation:LoginService , private router: Router) { }

  backLogin(){
    this.router.navigate(['login']);
  }

  onRegister(){
    debugger;
    this.registation.register(this.register).subscribe(res => {
      this.registerDetails = res
      console.log(res);
      this.router.navigate(['login'])
    })
  }
  
  ngOnInit() {
  }

}
