import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any;
  constructor(private moviesService: MoviesService, config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = false;
  }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe(data => this.movies = data);

  }

  print(){
    console.log(this.movies)
  }

  deleteMovie(movie): void {
    console.log(movie);
    this.moviesService.deleteMovie(movie.id);
  }

  rateMovie(movie): void {
    console.log(movie);
  }

}
