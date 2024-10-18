import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryRoutingModule } from './remote-entry-routing.module';
import { RemoteEntryComponent } from './remote-entry.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RemoteEntryComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RemoteEntryRoutingModule
  ]
})
export class RemoteEntryModule { }
