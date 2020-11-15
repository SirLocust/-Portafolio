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
    // Authorization: 'token auttoke'
  });
  constructor(private http: HttpClient) {

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

  getReadmeRepo(nameRepo: string): Observable<any> {


    return this.http.get(
      `https://api.github.com/repos/SirLocust/${nameRepo}/readme`,
      { headers: this.headerAuthorization, responseType: 'text' }
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
