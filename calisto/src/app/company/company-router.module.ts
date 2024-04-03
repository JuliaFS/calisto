import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { AuthActivate } from '../guards/auth.activate';
import { AuthGuard } from '../guards/add-companyFn.activate';

const routes: Routes = [
  { path: 'add-company', component: AddCompanyComponent, canActivate: [AuthGuard]},
  { path: 'company-list', component: CompanyListComponent },
  { path: 'company-details/:id', component: CompanyDetailsComponent },
  { path: 'edit-company/:id', component: EditCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}