import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitServiceService {
  urlApi = 'https://api.github.com';
  user = 'SirLocust';
  headerAuthorization = new HttpHeaders({
    Accept: 'application/vnd.github.v3.html',
    Authorization: 'token 3dfa11968aa53ed60f71cd10b1112d4ce6ad9d0c'
  });
  constructor(private http: HttpClient) {
  //   this.http.get('https://github.com/login/oauth/authorize?client_id=1c4ebdb1f4114c9fa30c').subscribe( data => {
  //     console.log(data)
  //   })
  }

  getAllRespositories(): Observable<any> {
    return this.http.get(`${this.urlApi}/users/${this.user}/repos`, { headers: this.headerAuthorization});
  }
  getCommitsRepo(nameRepo): Observable<any> {
    return this.http.get<[]>(
      `${this.urlApi}/repos/${this.user}/${nameRepo}/commits`,{
        headers: this.headerAuthorization,
      }
    ).pipe(
      map( data => data.length)
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
    return this.http.get(`${this.urlApi}/users/${this.user}`,{ headers:this.headerAuthorization});
  }
  getEventsUser(): Observable<any>{
    // header.append('Access-Control-Allow-Headers', 'accept', 'Content-Type');
    return this.http.get(`${this.urlApi}/users/${this.user}/events?per_page=100`);
  }
}
