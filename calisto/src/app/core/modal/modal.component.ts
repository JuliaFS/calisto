import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{
  companyId = this.act.snapshot.paramMap.get('id') as string;

  @Input() message : string = ''; 
  @Output() clickEvent = new EventEmitter();
  isOpen : boolean = false;
  //isClicked : boolean = false;

  constructor(private act: ActivatedRoute, private render: Renderer2, private router: Router, private location: Location){}

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.refreshStatus();
  // }

  firmAction(){
  this.isOpen = true;
  this.clickEvent.emit();
  this.router.navigate(['/company/company-list']);
  }

  goToBackPage(){
    this.isOpen = false;
    console.log(this.companyId)
    this.router.navigate([`/company/company-list`]);
    //this.location.onUrlChange;
    //this.router.navigate(['/company/company-list']);
    //this.location.back();
    //this.render.addClass($event.target,"hidden");

  }

  // refreshStatus(){
  //   this.router.navigate(['/company/company-details/{{companyId}}']);
  // }
}
