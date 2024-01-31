import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ExperienceModel } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceListService {

  private experienceURL = 'api/experience';
  private aboutURL = 'api/about';

  constructor( private http: HttpClient ) { };

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.status}`);

      return of(result as T);
    }

  }

  /**
   * 
   * @returns {*}  Observable<ExperienceModel[]
   * @memberof ExperienceListService
   */
  getExperience(): Observable<ExperienceModel[]> {
    return this.http.get<ExperienceModel[]>(this.experienceURL)
    .pipe(
      catchError(this.handleError<ExperienceModel[]>('getExperience',[]))
    );
  };
  
  getAbout(): Observable<ExperienceModel[]> {
    return this.http.get<ExperienceModel[]>(this.aboutURL)
    .pipe(
      catchError(this.handleError<ExperienceModel[]>('getExperience',[]))
    );
  };

}
