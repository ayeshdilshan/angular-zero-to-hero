import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadedmoduleoneComponent } from './lazyloadedmoduleone.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: LazyloadedmoduleoneComponent },
  { path: 'parent-child-communication', component: ParentComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadedmoduleoneRoutingModule { }
