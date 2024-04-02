import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Company } from '../model/company';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private data: DataService){}
  serverMessage : string = '';
  isLoading : boolean = false;
  company : Company[] = [];
 // ----
  // this.data.getAllCompanies().subscribe( res => {
  //   this.companyList = res.map((e : any) => {
  //     const data = e.payload.doc.data();
  //     data.id = e.payload.doc.id;
  //     //console.log(data);
  //     setTimeout(() => {
  //       this.isLoading = false;
  //     }, 1000)
  //     return data;
  //   })
  // }
  //---
  ngOnInit(): void {
    //console.log(this.auth.isLogged);
    this.data.getAllCompanies().subscribe({
      next: (firms : any) => {
        this.company = firms.map((e : any) => {
               const data = e.payload.doc.data();
          //     data.id = e.payload.doc.id;
               //console.log(data);
              setTimeout(() => {
                this.isLoading = false;
              }, 1000)
               return data;
        })



        //console.log('firms: ' + firms)
        //const data = firms.payload;
        //const data = firms.payload.doc.data();
        ///console.log('data: ' + data);
        //firms.sort(((a, b) => console.log(a)));

        //books.sort((a, b) => a.year - b.year);
       //const test = companies.slice(-1, 3);
       //console.log(test);
    }, 
    error: (err) => {
      this.serverMessage = err.message;
    },
  });


    this.company.sort((a, b) => b.working_capital - a.working_capital);
    console.log(this.company);
    //this.company.splice(0, 3);
    console.log(this.company);
  }

}
