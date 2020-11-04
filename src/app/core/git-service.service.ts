import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  constructor(private http:HttpClient) { }

  getAllRespositories() {

    let header = new HttpHeaders({
      'Accept': 'application/vnd.github.v3.html',
      
    })
    
    return this.http.get('https://api.github.com/repos/SirLocust/-Portafolio/readme',{ headers:header,
    responseType: 'text'
    })
  }
  getCommitsRepo(nameRepo){
    return this.http.get(`https://api.github.com/repos/SirLocust/${nameRepo}/commits`)
  }

}
