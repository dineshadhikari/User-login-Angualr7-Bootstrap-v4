import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";

import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }



  login(body) {
    return this.http
      .post<any>(this.baseUrl + "user-login", body)
      .pipe(
        map(data => {
          if (data.success) {
            //do some action
            localStorage.setItem("IsLogin", "true")
          } 
          return data
        })
      )
  }



}
