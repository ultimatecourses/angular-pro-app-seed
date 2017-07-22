import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Workout } from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'workout-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['workout-form.component.scss'],
  template: `
    <div class="workout-form">
      
      <form [formGroup]="form">

        <div class="workout-form__name">
          <label>
            <h3>Workout name</h3>
            <input 
              type="text" 
              placeholder="e.g. English Breakfast" 
              formControlName="name">
            <div class="error" *ngIf="required">
              Workout name is required
            </div>
          </label>
          <label>
            <h3>Type</h3>
            <workout-type 
              formControlName="type">
            </workout-type>
          </label>
        </div>

        

        <div class="workout-form__submit">
          <div>
            <button
              type="button"
              class="button"
              *ngIf="!exists"
              (click)="createWorkout()">
              Create workout
            </button>
            <button
              type="button"
              class="button"
              *ngIf="exists"
              (click)="updateWorkout()">
              Save
            </button>
            <a 
              class="button button--cancel"
              [routerLink]="['../']">
              Cancel
            </a>
          </div>

          <div class="workout-form__delete" *ngIf="exists">
            <div *ngIf="toggled">
              <p>Delete item?</p>
              <button 
                class="confirm"
                type="button"
                (click)="removeWorkout()">
                Yes
              </button>
              <button 
                class="cancel"
                type="button"
                (click)="toggle()">
                No
              </button>
            </div>

            <button class="button button--delete" type="button" (click)="toggle()">
              Delete
            </button>
          </div>

        </div>

      </form>

    </div>
  `
})
export class WorkoutFormComponent implements OnChanges {

  toggled = false;
  exists = false;

  @Input()
  workout: Workout;

  @Output()
  create = new EventEmitter<Workout>();

  @Output()
  update = new EventEmitter<Workout>();

  @Output()
  remove = new EventEmitter<Workout>();

  form = this.fb.group({
    name: ['', Validators.required],
    type: 'strength',
  });
  
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // if (this.meal && this.meal.name) {
    //   this.exists = true;
    //   this.emptyIngredients();

    //   const value = this.meal;
    //   this.form.patchValue(value);

    //   if (value.ingredients) {
    //     for (const item of value.ingredients) {
    //       this.ingredients.push(new FormControl(item));
    //     }
    //   }

    // }
  }

  // emptyIngredients() {
  //   while(this.ingredients.controls.length) {
  //     this.ingredients.removeAt(0);
  //   }
  // }

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

  // get ingredients() {
  //   return this.form.get('ingredients') as FormArray;
  // }

  // addIngredient() {
  //   this.ingredients.push(new FormControl(''));
  // }

  // removeIngredient(index: number) {
  //   this.ingredients.removeAt(index);
  // }

  createWorkout() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateWorkout() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removeWorkout() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;
  }

}