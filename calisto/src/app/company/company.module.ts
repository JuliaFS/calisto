import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-router.module';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';



@NgModule({
  declarations: [AddCompanyComponent, CompanyListComponent, DeleteCompanyComponent ],
  imports: [
    CommonModule,
    RouterModule,
    CompanyRoutingModule,
    FormsModule,
  ]
})
export class CompanyModule { }