import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private _auth: LoginService, private router: Router) { }

  backLogin(){
    this.router.navigate(['login']);
  }
  onReset(){
    
  }
  ngOnInit() {
  }

}
