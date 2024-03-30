// import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
// import { Company } from 'src/app/model/company';
// import { DataService } from 'src/app/shared/data.service';

// @Component({
//   selector: 'app-company-details',
//   templateUrl: './company-details.component.html',
//   styleUrls: ['./company-details.component.css']
// })
// export class CompanyDetailsComponent implements OnInit {
//   @Input() company?: Company;
//   @Output() refreshList: EventEmitter<any> = new EventEmitter();
//   currentCompany: Company = {
//     name: '',
//     country: '',
//     working_capital: 0,
//     invested_capital: 0,
//     published: false,
//     author: ''
//   };

//   //userId : string  = localStorage.getItem('userId');

//   message = '';

//   constructor(private data: DataService) { }

//   ngOnInit(): void {
//     this.message = '';
//   }

//   ngOnChanges(): void {
//     this.message = '';
//     this.currentCompany = { ...this.company };
//   }

//   updatePublished(status: boolean): void {
//     if (this.currentCompany.id) {
//       this.data.update(this.currentCompany.id, { published: status })
//       .then(() => {
//         this.currentCompany.published = status;
//         this.message = 'The status was updated successfully!';
//       })
//       .catch(err => console.log(err));
//     }
//   }

//   updateCompany(): void {
//     const data = {
//       name: this.currentCompany.name,
//       country: this.currentCompany.country,
//       working_capital: this.currentCompany.working_capital,
//       invested_capital: this.currentCompany.invested_capital,
//       author: localStorage.getItem('userId'),
//     };

//     if (this.currentCompany.id) {
//       this.data.update(this.currentCompany.id, data)
//         .then(() => this.message = 'The company was updated successfully!')
//         .catch(err => console.log(err));
//     }
//   }

//   deleteCompany(): void {
//     if (this.currentCompany.id) {
//       this.data.delete(this.currentCompany.id)
//         .then(() => {
//           this.refreshList.emit();
//           this.message = 'The company was updated successfully!';
//         })
//         .catch(err => console.log(err));
//     }
//   }
// }

import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';
import { CompanyListComponent } from '../company-list/company-list.component';
import { AuthService } from 'src/app/user/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companyId : any = this.act.snapshot.paramMap.get('id');
  userId : string = this.auth.userUid();
  isOwner : boolean = false;
  ownerId : any = '';
  message : string = '';
  isClickedDelete : boolean = false;

  
  currentCompany : any = {};
  //companyId : any = this.act.params;

  constructor(private data: DataService, private act: ActivatedRoute,
              private auth: AuthService, ){ }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(){

  
  this.data.getCompanyById(this.companyId).subscribe( res => {
        //console.log(res)
          // const data = e.payload.doc.data();
    this.currentCompany = res;
          //let test = res.data();
          // this.ownerId = res.owner;
          // console.log('test: ' + this.ownerId)
          //this.ownerId = res.payload.data().owner;
          // data.id = e.payload.doc.id;
          //this.userId = res.owner as string;
          // console.log(data);
          // return data;
    })  
  }

  showModal(){
    this.isClickedDelete = true;
    this.message = "Are you want to delete this company?"
    console.log('Yesssssssssss')
    console.log(this.isClickedDelete);
  }

    deleteCompany(): void {
      this.data.delete(this.companyId)
        .then(() => {
          this.message = 'The company was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  
}
