import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
//import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    ModalComponent,
    //ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    //ErrorComponent
  ]
})
export class CoreModule { }
