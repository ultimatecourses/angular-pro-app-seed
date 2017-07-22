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
              [placeholder]="placeholder" 
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

        <div class="workout-form__details">

          <div *ngIf="form.get('type').value === 'strength'">
            <div
              class="workout-form__fields"
              formGroupName="strength">
              <label>
                <h3>Reps</h3>
                <input type="number" formControlName="reps">
              </label>
              <label>
                <h3>Sets</h3>
                <input type="number" formControlName="sets">
              </label>
              <label>
                <h3>Weight <span>(kg)</span></h3>
                <input type="number" formControlName="weight">
              </label>
            </div>
          </div>

          <div *ngIf="form.get('type').value === 'endurance'">
            <div
              class="workout-form__fields"
              formGroupName="endurance">
              <label>
                <h3>Distance <span>(km)</span></h3>
                <input type="number" formControlName="distance">
              </label>
              <label>
                <h3>Duration <span>(minutes)</span></h3>
                <input type="number" formControlName="duration">
              </label>
            </div>
          </div>

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
    strength: this.fb.group({
      reps: 0,
      sets: 0,
      weight: 0
    }),
    endurance: this.fb.group({
      distance: 0,
      duration: 0
    })
  });
  
  constructor(
    private fb: FormBuilder
  ) {}

  get placeholder() {
    return `e.g. ${this.form.get('type').value === 'strength' ? 'Benchpress' : 'Treadmill'}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.workout && this.workout.name) {
      this.exists = true;
      const value = this.workout;
      this.form.patchValue(value);
    }
  }

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

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