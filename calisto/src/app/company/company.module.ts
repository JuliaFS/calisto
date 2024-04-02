import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-router.module';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ModalComponent } from '../core/modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AddCompanyComponent, 
    CompanyListComponent, 
    DeleteCompanyComponent, 
    CompanyDetailsComponent, 
    EditCompanyComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CompanyRoutingModule,
    SharedModule,
    NgbRating

  ]
})
export class CompanyModule { }