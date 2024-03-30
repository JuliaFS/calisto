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

  //currentCompany : Company[] = {};
  currentCompany : any = {};
  //companyId : any = this.act.params;

  constructor(private data: DataService, private act: ActivatedRoute,
              private auth: AuthService, ){ }

  //this.activeRoute.params.subscribe()
  ngOnInit(): void {
    this.getCompany();

    //console.log(this.companyId);
    // this.data.getCompanyById(this.companyId).subscribe( (data) => {
    //        console.log('currentCompany before: ' + this.currentCompany);
    //        //this.currentCompany = data;
    //        console.log('currentCompany after: ' + this.currentCompany);
    //        console.log(data)
    // });
    //console.log(this.data.getOneCompany);
    // getOne(x){
    //   const test = this.data.getOneCompany(x);
    //   console.log('details page: ' + test);
    // }

      //   this.firestore.collection("hospitals").snapshotChanges().subscribe((data) => {
      // this.hospitalsArray = data.map(e => {
      //   return { id: e.payload.doc.id, location: e.payload.doc.data()["location"], number: e.payload.doc.data()["phone"], name: e.payload.doc.data()["name"]}
      // })

    // constructor(private firestore:AngularFirestore){}
    // hospitalsArray=[];
    // ngOnInit(){
    //     this.firestore.collection("hospitals").snapshotChanges().subscribe((data) => {
    //       this.hospitalsArray = data.map(e => {
    //         return { id: e.payload.doc.id, location: e.payload.doc.data()["location"], number: e.payload.doc.data()["phone"], name: e.payload.doc.data()["name"]}
    //       })
    // }

    //console.log(this.data.getOneCompany);
    // this.activeRoute.params.subscribe( (data) => {
    //   //const id = data['themeId'];
    //   console.log(data)
    //   const id = data['uid'];
    //   console.log('id' + id);
    // })
    // this.data.getOneCompany().subscribe(){
    //   //id = e.payload.doc.id;
    // }

    // this.activeRoute.params.subscribe((data) => {
    //   const id = data;
    //   console.log(id);

      // this.apiService.getTheme(id).subscribe((theme) => {
      //   this.theme = theme;
      // });
    //});
  }

  getCompany(){

    // const company$ = this.data.getAllCompanies().snapshotChanges().pipe(map((companies) =>companies.map(compani=>{
    //   const data = s.payload.doc.id;
    //   console.log(data);
    //   return data;
    // })));
  
  // -------
  // schoolProductCollectionFetch(schoolName){
      
  //   const school = this.db.collection(schoolName)
  //   this.school$ = school.snapshotChanges().pipe(map(schoollist=>schoollist.map(s=>{
  //     const data = s.payload.doc.id;
  //     console.log(data);
  //     return data;
  //   })));
  //   return this.school$
  
  //  }
  //  -----
  // (fireuser => this.userService.get(fireuser.uid).snapshotChanges()),
  //       map(document => document.payload.data().isAdmin) 

  //--------------
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

      // this.data.getOwnerUid(this.companyId).subscribe( comp => {
        
      // }
        
      // )

      //this.ownerId = this.http.get(path).map(res => res.json());

    //   return this.auth.user$
    // .pipe(
    //   switchMap(fireuser => this.userService.get(fireuser.uid).snapshotChanges()),
    //     map(document => document.payload.data().isAdmin) 
    // )
      
      // }, err => {
      //   alert('Error while fetching company data!');
      // })
    }
}
