import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared modules
import { SharedModule } from './shared/shared.module';

// guards
import { AuthGuard } from '../auth/shared/guards/auth.guard';

export const ROUTES: Routes = [
  { path: 'schedule', canActivate: [AuthGuard], loadChildren: './schedule/schedule.module#ScheduleModule' },
  { path: 'meals', canActivate: [AuthGuard], loadChildren: './meals/meals.module#MealsModule' },
  { path: 'workouts', canActivate: [AuthGuard], loadChildren: './workouts/workouts.module#WorkoutsModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ]
})
export class HealthModule {}