import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public setRoles(roles: []) {
    localStorage.setItem("roles", JSON.stringify(roles));

  }
  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') || '{}');
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem("jwtToken") || '{}';

  }
  
  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
   return this.getRoles() && this.getToken();
  }

  public getUsers(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      return null;
    }
  }

  public setUsers(user:any){
    return localStorage.setItem('user',JSON.stringify(user));
  }

}
