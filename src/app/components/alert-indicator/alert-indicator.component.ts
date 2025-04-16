import {Component, Input, TemplateRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-alert-indicator',
  standalone: true,
  templateUrl: './alert-indicator.component.html',
  imports: [
    NgClass
  ],
  styles: [``]
})
export class AlertIndicatorComponent {
  @Input() theme: 'light' | 'dark' = 'light';
  constructor(private modalService: NgbModal) {}

  openAlertModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
}
