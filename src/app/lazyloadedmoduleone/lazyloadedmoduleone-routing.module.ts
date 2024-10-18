import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadedmoduleoneComponent } from './lazyloadedmoduleone.component';

const routes: Routes = [
  { path: '', component: LazyloadedmoduleoneComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadedmoduleoneRoutingModule { }
