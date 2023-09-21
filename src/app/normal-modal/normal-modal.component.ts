import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-normal-modal',
  templateUrl: './normal-modal.component.html'
  
})
export class NormalModalComponent {
  @Input() title: string = '';
  @Input() modalTitleId: string = '';
  

  @ViewChild('content', { static: false }) content: any;

  constructor(private modalService: NgbModal) {}

  openModal() {
    const options: NgbModalOptions = {
      backdrop: 'static', // To prevent closing by clicking outside
      centered: true 
    };

    this.modalService.open(this.content, options).result.then(
      (result) => {
        
        // Handle any necessary actions here
      },
      (reason) => {
       
        // Handle any necessary actions here
      }
    );
  }
}
