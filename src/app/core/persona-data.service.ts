import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonalData } from './models/personal-data.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonaDataService {
  pesonalData: Observable<PersonalData>;
  constructor(private http: HttpClient) {
    this.pesonalData = this.http
      .get<PersonalData>('assets/data/data-portafolio.json');
  }
}
