import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit{
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
      this.currentCompany = data;
    });
}

  ngOnChanges(): void {
    this.message = '';
  }

  updateCompany(): void {
    if(this.currentCompany.name == '' || this.currentCompany.country == ''
      || this.currentCompany.working_capital < 1 || this.currentCompany.invested_capital < 1){
        this.message = "Pls enter correct data!";
        return;
      }
    const data = {
      name: this.currentCompany.name,
      country: this.currentCompany.country,
      working_capital: this.currentCompany.working_capital,
      invested_capital: this.currentCompany.invested_capital,
    };

    this.data.update(this.companyId, data)
        .then(() => this.message = 'The company was updated successfully!')
        .catch(err => this.message = err );
        
    this.location.back();
  }
}

