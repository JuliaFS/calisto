import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companyList : Company[] = [];
  isLoading: boolean = true;

  id : string = '';
  name : string = '';
  country : string = '';
  working_capital : number = 0;
  invested_capital : number = 0;
  owner : string = '';
  message : string = '';
  

  constructor( private auth: AuthService, private data: DataService, private router: Router){}

  ngOnInit(): void {
    this.getAllCompanies();
    
  }

  // ngOnDestroy(): void {
  //   setTimeout
  // }

  getAllCompanies(){

    this.data.getAllCompanies().subscribe( res => {
      this.companyList = res.map((e : any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        //console.log(data);
        setTimeout(() => {
          this.isLoading = false;
        }, 1500)
        return data;
      })
    }, err => {
      this.isLoading = false;
      this.message = 'Error while fetching company list data!';
      console.log('Error while fetching company data!');
    })
  }
  }