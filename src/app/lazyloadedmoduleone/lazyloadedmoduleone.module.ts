import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadedmoduleoneRoutingModule } from './lazyloadedmoduleone-routing.module';
import { LazyloadedmoduleoneComponent } from './lazyloadedmoduleone.component';


@NgModule({
  declarations: [
    LazyloadedmoduleoneComponent
  ],
  imports: [
    CommonModule,
    LazyloadedmoduleoneRoutingModule
  ]
})
export class LazyloadedmoduleoneModule { }
