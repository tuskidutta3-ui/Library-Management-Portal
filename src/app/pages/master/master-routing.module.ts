import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  { path: '**', redirectTo: '/app' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
