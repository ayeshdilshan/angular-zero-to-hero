import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadedmoduleoneRoutingModule } from './lazyloadedmoduleone-routing.module';
import { LazyloadedmoduleoneComponent } from './lazyloadedmoduleone.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';


@NgModule({
  declarations: [
    LazyloadedmoduleoneComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    LazyloadedmoduleoneRoutingModule
  ]
})
export class LazyloadedmoduleoneModule { }
