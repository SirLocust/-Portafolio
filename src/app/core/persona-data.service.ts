import { HttpClient } from '@angular/common/http';
import { PersonalData } from './models/personal-data.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonaDataService {
  pesonalData: PersonalData;
  constructor(private http: HttpClient) {
    this.http
      .get<PersonalData>('assets/data/data-portafolio.json')
      .subscribe((data: PersonalData) => {
        this.pesonalData = data;
      });
  }
}
