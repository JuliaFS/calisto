import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit{
  companyList : Company[] = [];
  id : string = '';
  name : string = '';
  country : string = '';
  working_capital : number = 0;
  invested_capital : number = 0;

  constructor( private auth: AuthService, private data: DataService){}

  ngOnInit(): void {
    this.getAllCompanies();
    console.log(this.data);
  }

  getAllCompanies(){
    this.data.getAllCompanies().subscribe( res => {
      this.companyList = res.map((e : any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching company data!');
    })
  }

  editCompany(){

  }

  deleteCompany(x: Company){
    this.data.deleteCompany(x);
  }
}
