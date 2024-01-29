import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-header.component.scss'],
  template: `
    <div class="app-header">
      <div class="wrapper">
        <img src="/img/logo.svg">
        <div 
          class="app-header__user-info"
          *ngIf="user?.authenticated">
          <span (click)="logoutUser()"></span>
        </div>
      </div>
    </div>
  `
})
export class AppHeaderComponent {

  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();
  
  logoutUser() {
    this.logout.emit();
  }

}