import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';

const routes: Routes = [
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'company-list', component: CompanyListComponent },
  { path: 'delete-company', component: DeleteCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}