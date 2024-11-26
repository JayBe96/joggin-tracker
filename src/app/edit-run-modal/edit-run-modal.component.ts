import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Run } from '../models/run.model';

@Component({
  selector: 'app-edit-run-modal',
  templateUrl: './edit-run-modal.component.html',
  styleUrls: ['./edit-run-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonicModule
  ]
})
export class EditRunModalComponent {
  @Input() run!: Run;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss(this.run);
  }
}