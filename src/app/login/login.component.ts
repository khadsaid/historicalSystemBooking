import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginData={
    userName:"",
    userPassword: ""

  }

  constructor(private loginService:LoginService, private userAuthService:AuthService, private router:Router){}
  ngOnInit(): void {
  
    
  }

  login() {
    this.loginService.login(this.LoginData).subscribe((Response:any) => {
      console.log(Response.jwtToken);
      console.log(Response.user.role);

      this.userAuthService.setRoles(Response.user.role);
      this.userAuthService.setToken(Response.user.jwtToken);
      this.userAuthService.setUsers(Response.user);
      console.log(Response)
      const role = Response.user.role[0].roleName;
     
      if(role === 'Admin'){
       
        this.router.navigate(['/mainlayout'])}
       
      // }else if(role === 'Staff'){
        
      //   this.router.navigate(['/admin'])

      // }else{
      //   this.router.navigate(['/admin'])
       
      // } 
     
    });
  }
    

  }





