import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// containers
import { MealsComponent } from "./containers/meals.component";

export const ROUTES: Routes = [
  { path: '', component: MealsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    MealsComponent
  ],
})
export class MealsModule {}