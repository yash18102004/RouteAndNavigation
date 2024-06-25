import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  
  signupUser: any[] = []; 
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  }; 

  loginObj: any = {
    userName: '',
    password: '',
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUser');
    if (localData != null) {
      this.signupUser = JSON.parse(localData);
    }
  }

  onSignUp(): void {
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
    console.log('Form Values:', this.signupUser);
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    }; 
  }
  
  onLogin(): void {
    const user = this.signupUser.find(user => user.userName === this.loginObj.userName && user.password === this.loginObj.password);
    if (user) {
        alert('User Login Successfully');
        this.router.navigate(['/aboutus']);
        localStorage.setItem("isLoggedIn", "true"); 
    } else {
        alert('User Login Failed');
        localStorage.setItem("isLoggedIn", "false"); 
    }
  }
}
