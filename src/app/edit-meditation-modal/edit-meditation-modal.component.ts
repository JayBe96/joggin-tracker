import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Meditation } from '../models/meditation.model';

@Component({
  selector: 'app-edit-meditation-modal',
  templateUrl: './edit-meditation-modal.component.html',
  styleUrls: ['./edit-meditation-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonicModule
  ]
})
export class EditMeditationModalComponent {
  @Input() meditation!: Meditation;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss(this.meditation);
  }
}
