import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/IResponse';
import { baseUrl } from '../shared/baseUrl';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<IResponse>{
    return this.http.get<IResponse>(baseUrl + 'movies');
  }
}
