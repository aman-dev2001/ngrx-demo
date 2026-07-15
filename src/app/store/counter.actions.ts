import { createAction } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";

// Increment Action 

export const increment = createAction(
    '[Counter App] Increment'
)

// Decement Action 

export const decrement = createAction(
    '[Counter App] decrement'
)

// Reset Action 

export const reset = createAction(
    '[Counter App] reset'
)