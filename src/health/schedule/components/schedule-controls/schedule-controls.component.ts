import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'schedule-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['schedule-controls.component.scss'],
  template: `
    <div class="controls">
      
      <button 
        type="button"
        (click)="moveDate(offset - 1)">
        <img src="img/chevron-left.svg">
      </button>
      <p>{{ selected | date:'yMMMMd' }}</p>
      <button 
        type="button"
        (click)="moveDate(offset + 1)">
        <img src="img/chevron-right.svg">
      </button>

    </div>
  `
})
export class ScheduleControlsComponent {

  offset = 0;
  
  @Input()
  selected: Date;

  @Output()
  move = new EventEmitter<number>();

  moveDate(offset: number) {
    this.offset = offset;
    this.move.emit(offset);
  }

}