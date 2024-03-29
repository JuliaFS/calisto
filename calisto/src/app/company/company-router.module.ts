import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';

const routes: Routes = [
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'company-list', component: CompanyListComponent },
  { path: 'delete-company', component: DeleteCompanyComponent },
  { path: 'company-details/:id', component: CompanyDetailsComponent },
  { path: 'edit-company/:id', component: EditCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}