import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadedmoduletwoRoutingModule } from './lazyloadedmoduletwo-routing.module';
import { LazyloadedmoduletwoComponent } from './lazyloadedmoduletwo.component';


@NgModule({
  declarations: [
    LazyloadedmoduletwoComponent
  ],
  imports: [
    CommonModule,
    LazyloadedmoduletwoRoutingModule
  ]
})
export class LazyloadedmoduletwoModule { }
