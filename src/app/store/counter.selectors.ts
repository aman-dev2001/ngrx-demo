import { createSelector } from "@ngrx/store";
import { count } from "rxjs";

export interface AppState {
    counter: number;
}

export const selectCounterState = (state: AppState) => state.counter;

export const selectCounter = createSelector (
    selectCounterState, 
    counter => counter
);