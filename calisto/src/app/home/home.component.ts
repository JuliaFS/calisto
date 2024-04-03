import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Company } from '../model/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private data: DataService, public router: Router){}
  serverMessage : string = '';
  isLoading : boolean = false;
  company : Company[] = [];

  ngOnInit(): void {
    this.data.getAllCompanies().subscribe({
      next: (firms : any) => {
        this.company = firms.map((e : any) => {
               const data = e.payload.doc.data();
              data.id = e.payload.doc.id;
              setTimeout(() => {
                this.isLoading = false;
              }, 1000)
               return data;
        })
        this.company.sort((a, b) => b.working_capital - a.working_capital);
        this.company = this.company.splice(0, 3);
    }, 
    error: (err) => {
      this.serverMessage = err.message;
    },
  });
  }
}
