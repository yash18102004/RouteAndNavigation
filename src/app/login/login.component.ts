import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router : Router) { }
  ngOnInit(): void {
  }
login(userid:string,password :any) {
  if (userid == "yash" && password == "123") {
    localStorage.setItem("isLoggedIn", "true"); 
   
  } else{
    localStorage.setItem("isLoggedIn", "false")
    alert('Login failed. Plese try Again!!')
  }
}
  



}
