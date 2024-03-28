import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { map } from 'rxjs/operators';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies?: Company[];
  currentCompany?: Company;
  //userId : string | null = localStorage.getItem('userId');
  currentIndex = -1;
  title = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.retrieveCompanies();
    //console.log(this.userId);
    //console.log(this.companies)
  }

  refreshList(): void {
    this.currentCompany = undefined;
    this.currentIndex = -1;
    this.retrieveCompanies();
  }

  retrieveCompanies(): void {
    this.data.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.companies = { ...data };
      //this.companies.userId = this.userId;
    });
  }

  // setActiveCompany(company: Company, index: number): void {
  //   this.currentCompany = company;
  //   this.currentIndex = index;
  // }

  setActiveCompany(company: Company): void {
    this.currentCompany = company;
  }
}

// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Company } from 'src/app/model/company';
// import { DataService } from 'src/app/shared/data.service';
// import { AuthService } from 'src/app/user/auth.service';

// @Component({
//   selector: 'app-company-list',
//   templateUrl: './company-list.component.html',
//   styleUrls: ['./company-list.component.css']
// })
// export class CompanyListComponent implements OnInit{
//   companyList : Company[] = [];

//   id : string = '';
//   name : string = '';
//   country : string = '';
//   working_capital : number = 0;
//   invested_capital : number = 0;

//   constructor( private auth: AuthService, private data: DataService, private router: Router){}

//   ngOnInit(): void {
//     this.getAllCompanies();
    
//   }

//   getAllCompanies(){
//     this.data.getAllCompanies().subscribe( res => {
//       this.companyList = res.map((e : any) => {
//         const data = e.payload.doc.data();
//         data.id = e.payload.doc.id;
//         return data;
//       })
//     }, err => {
//       alert('Error while fetching company data!');
//     })
//   }

//   companyDetails(x: Company){
//     // const companyData = this.data.getOneCompany(x);
//     // console.log('company details in company list: ' + {companyData })
//     // //this.router.navigate(['/company/company-details', companyData]);
//     // this.router.navigate(['/company/company-details']);
//   }

//   deleteCompany(x: Company){
//     this.data.deleteCompany(x);
//   }

//   // getOne(x: Company){
//   //   const test = this.data.getOneCompany(x);
//   //   console.log(x);
//   //   return test;
//   // }
// }
