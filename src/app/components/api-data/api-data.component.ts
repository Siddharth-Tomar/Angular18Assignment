import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { CommonModule } from '@angular/common';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}
@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.scss',
})
export class ApiDataComponent implements OnInit {
  jokes: Joke[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    this.fetchJokes();
  }

  fetchJokes() {
    this.loading = true;
    this.error = null;
    this.jokeService.getJokes().subscribe(
      (data) => {
        this.jokes = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to load jokes. Please try again later.';
        this.loading = false;
      }
    );
  }
}
