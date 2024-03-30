import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent {
  @Input() currentCompany : any = {}
  companyId : any = this.act.snapshot.paramMap.get('id');
  message = 'Are you sure you want to delete this company?';

  constructor(  private data: DataService, private act: ActivatedRoute ){}

  deleteCompany(id  : string){
    // if(window.confirm('Are you sure you want to delete' + company.name + '?')){
    //   this.data.deleteCompany(company);
    // }
    console.log(this.currentCompany)
    //this.data.deleteCompany(this.companyId);
      // .then(() => this.message = 'The company was updated successfully!')
      // .catch(err => console.log(err));
  }
}
