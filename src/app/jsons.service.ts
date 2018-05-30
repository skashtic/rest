import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { JsonFile } from './json-file';

@Injectable()
export class JsonsService {
  constructor(private http: HttpClient) {}
  filesUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  getJSON (): Observable<JsonFile[]> {
    return this.http.get<JsonFile[]>(this.filesUrl)
      .pipe(
        tap(
          // TODO service to publish massages
         res =>  {
           console.log(' res = ' + res);
           }
        ),
        catchError(
          // TODO error handling functions
          (err: any): Observable<JsonFile[]> =>  {
           console.log(' err = ' + err);
           return of(err as JsonFile[]);
          }
        )
      );
  }

}

/*  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }*/
