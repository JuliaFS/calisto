import { Component, Input } from '@angular/core';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent {
  
  constructor(  private data: DataService ){}

  deleteCompany( company: Company){
    if(window.confirm('Are you sure you want to delete' + company.name + '?')){
      //this.data.deleteCompany(company.id);
    }
  }
}
