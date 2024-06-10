import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{School} from '../Models/School'

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  // getSchool() {
  //   throw new Error('Method not implemented.');
  // }
  // private baseUrl = 'http://localhost:8080/api/v2/school';

  
  // constructor(private httpClient: HttpClient) { }

  // getSchools(): Observable<School[]> {
  //   return this.httpClient.get<School[]>(`${this.baseUrl}/school`);
  // }

  // addSchool(school: School): Observable<School> {
  //   return this.httpClient.post<School>(`${this.baseUrl}/school`, school);
  // }

  // updateSchool(school: School): Observable<School> {
  //   return this.httpClient.put<School>(`${this.baseUrl}/school/${school.Id}`, school);
  // }

  // deleteSchool(id: number): Observable<void> {
  //   return this.httpClient.delete<void>(`${this.baseUrl}/school/${id}`);
  // }
 
  // CreateSchool(school: School): Observable<object>{
  //   return this.httpClient.post(`${this.baseUrl}`,school);
  //  }

  private baseURL = 'http://localhost:8080/api/v2/school';

 

  

  constructor(private httpClient: HttpClient) { }

  getSchool(): Observable<School[]>{

    return this.httpClient.get<School[]>(`${this.baseURL}`);

  }
 CreateSchool(school: School): Observable<object>{
  return this.httpClient.post(`${this.baseURL}`,school);
 }
//  deleteVisitor(id:number): observable<object>{
//   return this.httpClient.delete(`${this.baseURL}/${id}`);
//  }

deleteSchool(id: number): Observable<object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
getSchoolById(id:number): Observable<School>{
  return this.httpClient.get<School>(`${this.baseURL}/${id}`);
}

}
