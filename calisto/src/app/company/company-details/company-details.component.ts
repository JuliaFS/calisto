import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  @Input() company?: Company;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentCompany: Company = {
    name: '',
    country: '',
    working_capital: 0,
    invested_capital: 0,
    published: false,
  };

  message = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentCompany = { ...this.company };
  }

  updatePublished(status: boolean): void {
    if (this.currentCompany.id) {
      this.data.update(this.currentCompany.id, { published: status })
      .then(() => {
        this.currentCompany.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateCompany(): void {
    const data = {
      name: this.currentCompany.name,
      country: this.currentCompany.country,
      working_capital: this.currentCompany.working_capital,
      invested_capital: this.currentCompany.invested_capital,
    };

    if (this.currentCompany.id) {
      this.data.update(this.currentCompany.id, data)
        .then(() => this.message = 'The company was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteCompany(): void {
    if (this.currentCompany.id) {
      this.data.delete(this.currentCompany.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The company was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}

// import { Component, Input, OnInit, Output } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Company } from 'src/app/model/company';
// import { DataService } from 'src/app/shared/data.service';
// import { CompanyListComponent } from '../company-list/company-list.component';
// import { AuthService } from 'src/app/user/auth.service';

// @Component({
//   selector: 'app-company-details',
//   templateUrl: './company-details.component.html',
//   styleUrls: ['./company-details.component.css']
// })
// export class CompanyDetailsComponent implements OnInit {
//   companyId : string = "";

//   constructor(private data: DataService){ }

//   //this.activeRoute.params.subscribe()
//   ngOnInit(): void {
    
//     console.log()
//     //console.log(this.data.getOneCompany);
//     // getOne(x){
//     //   const test = this.data.getOneCompany(x);
//     //   console.log('details page: ' + test);
//     // }

//       //   this.firestore.collection("hospitals").snapshotChanges().subscribe((data) => {
//       // this.hospitalsArray = data.map(e => {
//       //   return { id: e.payload.doc.id, location: e.payload.doc.data()["location"], number: e.payload.doc.data()["phone"], name: e.payload.doc.data()["name"]}
//       // })

//     // constructor(private firestore:AngularFirestore){}
//     // hospitalsArray=[];
//     // ngOnInit(){
//     //     this.firestore.collection("hospitals").snapshotChanges().subscribe((data) => {
//     //       this.hospitalsArray = data.map(e => {
//     //         return { id: e.payload.doc.id, location: e.payload.doc.data()["location"], number: e.payload.doc.data()["phone"], name: e.payload.doc.data()["name"]}
//     //       })
//     // }

//     //console.log(this.data.getOneCompany);
//     // this.activeRoute.params.subscribe( (data) => {
//     //   //const id = data['themeId'];
//     //   console.log(data)
//     //   const id = data['uid'];
//     //   console.log('id' + id);
//     // })
//     // this.data.getOneCompany().subscribe(){
//     //   //id = e.payload.doc.id;
//     // }

//     // this.activeRoute.params.subscribe((data) => {
//     //   const id = data;
//     //   console.log(id);

//       // this.apiService.getTheme(id).subscribe((theme) => {
//       //   this.theme = theme;
//       // });
//     //});
//   }

   
// }
