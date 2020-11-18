import { UserGit } from './models/user-git.model';
import { RepositoryGit } from './models/repository-git.model';
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
    Authorization: 'token 5b2ba8348359945a1e1b94895efb7d3dee3c039b'
  });
  constructor(private http: HttpClient) {

  }

  getAllRespositories(): Observable<RepositoryGit[]> {
    return this.http.get<RepositoryGit[]>(`${this.urlApi}/users/${this.user}/repos`, { headers: this.headerAuthorization});
  }
  getCommitsRepo(nameRepo): Observable<number> {
    return this.http.get<[]>(
      `${this.urlApi}/repos/${this.user}/${nameRepo}/commits?per_page=100`, {
        headers: this.headerAuthorization,
      }
    ).pipe(
      map( (data: [])  => data.length)
    );
  }

  getReadmeRepo(nameRepo: string): Observable<string> {


    return this.http.get(
      `https://api.github.com/repos/SirLocust/${nameRepo}/readme`,
      { headers: this.headerAuthorization, responseType: 'text' }
    );
  }

  getUser(): Observable<UserGit>{
    return this.http.get<UserGit>(`${this.urlApi}/users/${this.user}`,{ headers: this.headerAuthorization});
  }
  // getEventsUser(): Observable<any>{
  //   // header.append('Access-Control-Allow-Headers', 'accept', 'Content-Type');
  //   return this.http.get(`${this.urlApi}/users/${this.user}/events?per_page=100`);
  // }
}
