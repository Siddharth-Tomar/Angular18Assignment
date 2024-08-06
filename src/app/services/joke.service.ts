import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private apiUrl = 'https://official-joke-api.appspot.com/jokes/ten';

  constructor(private http: HttpClient) {}

  getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.apiUrl);
  }
}
