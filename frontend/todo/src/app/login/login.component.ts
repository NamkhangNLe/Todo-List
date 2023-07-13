import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username = 'namkhangnle'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.username)
    if(this.username === "namkhangnle" && this.password === "dummy") {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
