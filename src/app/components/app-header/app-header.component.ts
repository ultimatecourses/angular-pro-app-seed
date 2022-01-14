import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-header.component.scss'],
  templateUrl: './app-header.component.html'
})

export class AppHeaderComponent {

  @Input() user: User;

  @Output() logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }

}
