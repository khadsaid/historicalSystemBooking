import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = "http://localhost:8080";
  requestHeader = new HttpHeaders(
    { "NO-AUTH": "True" }
  )
  constructor(private httpclient: HttpClient, private authService:AuthService) { }

  public login(LoginData: any) {
    return this.httpclient.post(`${this.baseURL}/authenticate`, LoginData, { headers: this.requestHeader });

  }
  public rolematch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.authService.getRoles();
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
        }
      }
    }
    return isMatch; // Return false if no match is found
  }


  public createNewUser(user: User): Observable<object> {
    return this.httpclient.post(`${this.baseURL}/registerNewUser`, user);

  }
  public createNewStaff(staff: User): Observable<object> {
    return this.httpclient.post(`${this.baseURL}/registerNewStaff`, staff);

  }

  public staffList(): Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.baseURL}/fetchAllStaff`);
  }

}
