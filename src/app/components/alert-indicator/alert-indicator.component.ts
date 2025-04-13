import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-indicator',
  standalone: true,
  templateUrl: './alert-indicator.component.html',
  styles: [``]
})
export class AlertIndicatorComponent {
  constructor(private modalService: NgbModal) {}

  openAlertModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
}
