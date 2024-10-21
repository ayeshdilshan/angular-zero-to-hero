import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteEntryComponent } from './remote-entry.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent },
  {
    path: 'a',
    loadChildren: () =>
      import('../lazyloadedmoduleone/lazyloadedmoduleone.module').then(
        (m) => m.LazyloadedmoduleoneModule
      ),
  },
  {
    path: 'b',
    loadChildren: () =>
      import('../lazyloadedmoduletwo/lazyloadedmoduletwo.module').then(
        (m) => m.LazyloadedmoduletwoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteEntryRoutingModule { }
