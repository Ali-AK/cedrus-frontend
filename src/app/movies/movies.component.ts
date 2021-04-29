import { Component, OnInit } from '@angular/core';
import { IMovie } from '../models/IMovie';
import { IResponse } from '../models/IResponse';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IResponse;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe(data => this.movies = data);

  }

  print(){
    console.log(this.movies)
  }

}
