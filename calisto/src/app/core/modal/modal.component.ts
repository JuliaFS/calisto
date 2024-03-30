import { Component, Input } from '@angular/core';
import { ModalMainService } from './modal-main.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() message : string = '';

  constructor(public modal: ModalMainService){}

  ConfirmAction(){

  }

  goToBackPage(){
      
  }
}
