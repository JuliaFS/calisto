import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit{
  // //@Input() currentCompany: Company = {};
  // company : Company = new Company();
  editCompany(){}


   companyId : any = this.act.snapshot.paramMap.get('id');

  currentCompany : any = {
    name: '',
    country: '',
    working_capital: 0,
    invested_capital: 0,
  };

  message = '';

  constructor(
    private data: DataService, 
    private act: ActivatedRoute, 
    private router: Router, 
    private location: Location
  ){}

   ngOnInit(): void {
    this.data.getCompanyById(this.companyId).subscribe( (data) => {
      console.log('currentCompany before: ' + this.currentCompany);
      this.currentCompany = data;
      console.log('currentCompany after: ' + this.currentCompany);
    });
}

  ngOnChanges(): void {
    this.message = '';
  }

  updateCompany(): void {
    const data = {
      name: this.currentCompany.name,
      country: this.currentCompany.country,
      working_capital: this.currentCompany.working_capital,
      invested_capital: this.currentCompany.invested_capital,
    };

    if (this.currentCompany.id) {
      this.data.update(this.companyId, data)
        .then(() => this.message = 'The company was updated successfully!')
        .catch(err => console.log(err));
    }
    this.location.back();
  }
}

