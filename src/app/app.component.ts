import { MovieSearchService, Movie } from './movie-search.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { switchMap, debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Movie Search App';

  searchValue = new Subject<any>();
  movie$: Observable<Movie> = this.searchValue.pipe(
    debounceTime(500),
    switchMap(value => this.service.movieSearch(value))
  );

  constructor(private service: MovieSearchService) {}

  searchChange(value) {
    this.searchValue.next(value.target.value);
  }
}
