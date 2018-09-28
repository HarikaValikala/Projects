import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient , private router: Router) { }

  register(registerData){
    return this.http.post('https://reqres.in/api/register',registerData);
  }

  login(loginData) {
    return this.http.post('https://reqres.in/api/login', loginData);
  }

  onLogged(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  
}
