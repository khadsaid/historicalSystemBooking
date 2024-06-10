import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{PrivateGroup} from '../Models/PrivateGroups'

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseURL = 'http://localhost:8080/api/v3/group';



  constructor(private httpClient: HttpClient) { }

  getgroup(): Observable<PrivateGroup[]>{

    return this.httpClient.get<PrivateGroup[]>(`${this.baseURL}`);

  }
 CreateGroup(group: PrivateGroup): Observable<object>{
  return this.httpClient.post(`${this.baseURL}`,group);
 }


deleteGroup(id: number): Observable<object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
getGroupById(id:number): Observable<PrivateGroup>{
  return this.httpClient.get<PrivateGroup>(`${this.baseURL}/${id}`);
}

}
