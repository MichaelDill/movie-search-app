import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Movie {
  Title?: string;
  Year?: number;
  Rated?: string;
  Plot?: string;
  Error?: string;
}

@Injectable()
export class MovieSearchService {
  private baseUrl = 'http://www.omdbapi.com';
  private apiKey = '';

  constructor(private http: HttpClient) {}

  public movieSearch(searchTerm: string): Observable<Movie> {
    if (!this.isEmpty(searchTerm)) {
      return this.http.get<Movie>(
        `${this.baseUrl}?t=${searchTerm}&${this.apiKey}`
      );
    }
    return of(null);
  }

  isEmpty(value) {
    return value === undefined || value === null || value === '';
  }
}
