import { Component, ViewChild } from '@angular/core';
import { NormalModalComponent } from './normal-modal/normal-modal.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NormalModalComponent, { static: false }) normalModal!: NormalModalComponent;


  // Function to open the normal modal
  openNormalModal() {
    this.normalModal.openModal();
  }
}
