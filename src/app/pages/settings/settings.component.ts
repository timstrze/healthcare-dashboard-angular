import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `<div class="p-4"><h2>⚙️ Settings Page (Protected)</h2></div>`
})
export class SettingsComponent {}
