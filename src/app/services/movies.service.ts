import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/IResponse';
import { baseUrl } from '../shared/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<IResponse>{
    return this.http.get<IResponse>(baseUrl + 'movies');
  }

  deleteMovie(movieId) {
    this.http.delete(baseUrl + 'movies/'+ movieId);
  }
}
