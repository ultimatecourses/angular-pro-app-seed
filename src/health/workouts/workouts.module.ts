import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// containers
import { WorkoutsComponent } from "./containers/workouts.component";

export const ROUTES: Routes = [
  { path: '', component: WorkoutsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    WorkoutsComponent
  ],
})
export class WorkoutsModule {}