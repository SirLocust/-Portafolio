import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitServiceService {
  urlApi = 'https://api.github.com';
  user = 'SirLocust';

  constructor(private http: HttpClient) {
  //   this.http.get('https://github.com/login/oauth/authorize?client_id=1c4ebdb1f4114c9fa30c').subscribe( data => {
  //     console.log(data)
  //   })
  }

  getAllRespositories(): Observable<any> {
    const header = new HttpHeaders({
      Accept: 'application/vnd.github.v3.html',
      Authorization: 'token 5fa86c6a90351aee3e51e4514dd8fd90f812ac86'
    });
    return this.http.get(`${this.urlApi}/users/${this.user}/repos`, { headers: header});
  }
  getCommitsRepo(nameRepo): Observable<any> {
    return this.http.get(
      `${this.urlApi}/repos/${this.user}/${nameRepo}/commits`
    );
  }

  getReadmeRepo(): Observable<any> {
    const header = new HttpHeaders({
      Accept: 'application/vnd.github.v3.html',
    });

    return this.http.get(
      'https://api.github.com/repos/SirLocust/-Portafolio/readme',
      { headers: header, responseType: 'text' }
    );
  }

  getUser(): Observable<any>{
    const header = new HttpHeaders({
      Accept: 'application/vnd.github.v3.html',
      Authorization: 'token 5fa86c6a90351aee3e51e4514dd8fd90f812ac86'
    });
    return this.http.get(`${this.urlApi}/users/${this.user}`,{ headers:header});
  }
  getEventsUser(): Observable<any>{
    // header.append('Access-Control-Allow-Headers', 'accept', 'Content-Type');
    return this.http.get(`${this.urlApi}/users/${this.user}/events?per_page=100`);
  }
}
