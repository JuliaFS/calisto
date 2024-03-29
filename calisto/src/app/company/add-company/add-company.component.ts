// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// import { Company } from 'src/app/model/company';
// import { DataService } from 'src/app/shared/data.service';

// @Component({
//   selector: 'app-add-company',
//   templateUrl: './add-company.component.html',
//   styleUrls: ['./add-company.component.css']
// })
// export class AddCompanyComponent  {
//   company: Company = new Company();
//   submitted = false;
//  // userId : string = localStorage.getItem('userId');




//   constructor(private data: DataService, private route: Router) { }

//   saveCompany(): void {
//     this.data.create(this.company).then(() => {
//       console.log('Created new item successfully!');
//       this.submitted = true;
//       this.route.navigate(['/company/company-list']);
//     });
//   }

//   newCompany(): void {
//     this.submitted = false;
//     this.company = new Company();
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  companyList : Company[] = [];
  companyObj : Company = {
    id: '',
    name: '',
    country: '',
    working_capital: 0,
    invested_capital: 0,
    owner: '',
  };

  ownerVar = localStorage.getItem('userId') as string;

  id : string = '';
  name : string = '';
  country : string = '';
  working_capital : number = 0;
  invested_capital : number = 0;

  constructor(private data: DataService, private router: Router){}
  //private auth: AuthService

  addCompany(){
    if(this.name == '' || this.country == '' || this.working_capital < 0 || this.invested_capital < 0){
      alert('Fill all input fields corectly!');
    }

    this.companyObj.id = '';
    this.companyObj.name = this.name;
    this.companyObj.country = this.country;
    this.companyObj.working_capital = this.working_capital;
    this.companyObj.invested_capital = this.invested_capital;

    console.log(this.ownerVar);
    this.companyObj.owner = this.ownerVar;
    
    console.log(this.companyObj);
    this.data.addCompany(this.companyObj);

    this.resetForm();
    this.router.navigate(['/company/company-list']);
  }

  resetForm(){
    this.id = '';
    this.name = '';
    this.country = '';
    this.working_capital = 0;
    this.invested_capital  = 0;
  }

}
