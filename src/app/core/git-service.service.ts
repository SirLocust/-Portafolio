import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitServiceService {
  urlApi = 'https://api.github.com';
  user = 'SirLocust';

  constructor(private http: HttpClient) {}

  getAllRespositories(): Observable<any> {
    return this.http.get(`${this.urlApi}/users/${this.user}/repos`);
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
    return this.http.get(`${this.urlApi}/users/${this.user}`);
  }
  getEventsUser(): Observable<any>{
    // header.append('Access-Control-Allow-Headers', 'accept', 'Content-Type');
    return this.http.get(`${this.urlApi}/users/${this.user}/events?per_page=100`);
  }
}
