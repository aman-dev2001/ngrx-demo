import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { select, Store } from "@ngrx/store";
import { decrement, increment, reset } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppState, selectCounter } from './store/counter.selectors';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter$!: Observable<number>;
  constructor(private Store: Store<AppState>) {
    this.counter$ = this.Store.select(selectCounter);
  }

  inc() {
    this.Store.dispatch(increment());
  }

  dec() {
    this.Store.dispatch(decrement());
  }

  reset() {
    this.Store.dispatch(reset());
  }
}
