import { createReducer, on, State } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";


export const initialState = 0;

export const counterReducer = createReducer(
    initialState,

    // On increment Action 

    on(increment, (state) => state + 1),

    // on(decrement, (state) => state - 1),
    on(decrement, (state) => (state > 0 ? state - 1 : 0)),

    on(reset, (state) => state = 0)
)
