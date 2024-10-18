import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadedmoduletwoComponent } from './lazyloadedmoduletwo.component';

const routes: Routes = [{ path: '', component: LazyloadedmoduletwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyloadedmoduletwoRoutingModule {}
