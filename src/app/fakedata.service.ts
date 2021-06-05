import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Color } from './models/color.model'
import { User } from '../app/models/user.model'


@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private hc: HttpClient) { }
  getColors(): Observable<Color> {
    return this.hc.get<Color>("https://reqres.in/api/unknown");
  }

  getUsers(): Observable<User[]> {
    return this.hc.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
  getUserIds(): Observable<any> {
    return this.hc.get<any>("http://localhost:3000/users");
  }

  getUserById(id): Observable<any> {
    return this.hc.get<any>('http://localhost:3000/users/' + id)
  }


}
