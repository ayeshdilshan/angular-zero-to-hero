import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remote-entry',
  templateUrl: './remote-entry.component.html',
  styleUrl: './remote-entry.component.css'
})
export class RemoteEntryComponent {
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
