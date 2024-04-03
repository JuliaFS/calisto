import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from 'src/app/user/auth.service';
import { NgForm } from '@angular/forms';

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
  message : string = '';
  serverMessage : string = '';

  //ownerVar = localStorage.getItem('userId') as string;
  ownerVar : string = this.auth.userUid();

  // id : string = '';
  // name : string = '';
  // country : string = '';
  // working_capital : number = 0;
  // invested_capital : number = 0;

  constructor(private data: DataService, private router: Router, private auth: AuthService){}

  addCompany(form: NgForm){

    if (form.invalid) {
      this.serverMessage = 'Pls fill all fields corectly!';
      return;
    }

    const { name, country, working_capital, invested_capital } = form.value;

    this.companyObj.id = '';
    this.companyObj.name = name;
    this.companyObj.country = country;
    this.companyObj.working_capital = working_capital;
    this.companyObj.invested_capital = invested_capital;

    this.companyObj.owner = this.ownerVar;
    
    this.data.addCompany(this.companyObj)
    .then(() => {
      console.log(this.companyObj)
      //this.resetForm();
      this.router.navigate(['/company/company-list']);
    }, err => {
      console.log(err.message);
      this.serverMessage = err.message;
    } );

      // this.resetForm();
      // this.router.navigate(['/company/company-list']);

  }

  get isLogged() : boolean | null{
    return localStorage.getItem('token') ? true : null;
  }

  // resetForm(){
  //   this.id = '';
  //   this.name = '';
  //   this.country = '';
  //   this.working_capital = 0;
  //   this.invested_capital  = 0;
  // }

}
