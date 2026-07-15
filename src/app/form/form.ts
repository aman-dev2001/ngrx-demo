import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { formFeature } from './form.feature';
import { resetForm, updateFormField } from './form.actions';

@Component({
  selector: 'app-form',
  imports: [CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  // form$ : Observable<{ name: string; email: string }>;

  // constructor(private Store:Store){
  //   this.form$ = this.Store.select(formFeature.selectFormState);
  // }

  private Store = inject (Store);
  form$ = this.Store.select (formFeature.selectFormState);

  updatedField (field: 'name' | 'email', value:string) {
    this.Store.dispatch (updateFormField ({ field, value}) );
  }

  resetForm () {
    this.Store.dispatch(resetForm())
  }
}
