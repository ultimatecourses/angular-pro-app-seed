import { Component } from '@angular/core';

@Component({
  selector: 'meal',
  styleUrls: ['meal.component.scss'],
  template: `
    <div class="meal">
      I am a meal!
    </div>
  `
})
export class MealComponent {
  constructor() {}
}