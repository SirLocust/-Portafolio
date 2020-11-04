import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  constructor(private http:HttpClient) { }

  getAllRespositories() {
    return this.http.get('https://api.github.com/users/SirLocust/repos')
  }
}
