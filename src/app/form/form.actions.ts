import { createAction, props, UPDATE } from "@ngrx/store";

export const updateFormField = createAction (
    '[From] update field',
    props<{field: 'name' | 'email'; value: string}>()
);

export const resetForm = createAction ('[Form] Reset');

