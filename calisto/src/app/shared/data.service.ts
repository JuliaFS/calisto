import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  //add company
  addCompany(company: Company){
    company.id = this.afs.createId();
    
    return this.afs.collection('/Companies').add(company);
  }

  //getOne company
  //getOneCompany(company: Company){
    //ts.afs.doc('/Companies/' + company.id).get();
    // console.log('in data servise company.id: ' + company.id);
    // this.afs.doc('/Companies/' + company.id).valueChanges().subscribe(data => {
    //   console.log(data);
    // });

    // this.afs.collection('/Companies').snapshotChanges().subscribe((data) => {
    //   this.data.map(e => {
    //     return {id: e.payload.doc.id };
    //   })
      
      // hospitalsArray = data.map(e => {
      //   return { id: e.payload.doc.id, location: e.payload.doc.data()["location"], number: e.payload.doc.data()["phone"], name: e.payload.doc.data()["name"]}
      // })
  //})
//}

  getCompanyById(id : string){
    return this.afs.collection('Companies').doc(id).valueChanges();
  }

  getOwnerUid(id: any){
    // this.userService.get(fireuser.uid).snapshotChanges()),
    //     map(document => document.payload.data().isAdmin) 
   // return this.afs.collection('Companies').doc(id).valueChanges();
   return this.afs.collection('Companies').doc(id).snapshotChanges();
  }

  // ownerUid(): Observable<string> {
  //   return this.afs.user$
  //     .pipe(
  //       switchMap(fireuser => this.userService.get(fireuser.uid).snapshotChanges()),
  //         map(document => document.payload.data().isAdmin) 
  //     )
  // }

  //!work
  // updateDoc(_id: string, _value: string) {
  //   let doc = this.afs.collection('options', ref => ref.where('id', '==', _id));
  //   doc.snapshotChanges().subscribe((res: any) => {
  //     let id = res[0].payload.doc.id;
  //     this.afs.collection('options').doc(id).update({rating: _value});
  //   });
  // }
  //get all companies
  getAllCompanies(){
    //return this.afs.collection('/Companies').snapshotChanges();
    //return this.afs.collection('/Companies');
    //return this.afs.collection('Companies').snapshotChanges();
    return this.afs.collection('Companies').snapshotChanges();
    
  }

  //delete company
  // deleteCompany( companyId: any  ){
  //   this.afs.doc('/Companies/' + companyId).delete();
  // }

  delete(id: string): Promise<void> {
    return this.afs.collection('Companies').doc(id).delete();
  }

   //update company 2
     update(id: string, data: any): Promise<void> {
    return this.afs.collection('Companies').doc(id).update(data);
  }

  //update company
  // updateCompany( company: Company ){
  //   this.deleteCompany(company);
  //   this.addCompany(company);
  // }

}



// >>>>>>>>>>>>>>>
// constructor(private firestore:AngularFirestore){}
// hospitalsArray=[];
// ngOnInit(){
//     this.firestore.collection("hospitals").snapshotChanges().subscribe((data) => {
//       this.hospitalsArray = data.map(e => {
//         return { id: e.payload.doc.id, location: e.payload.doc.data()["location"], number: e.payload.doc.data()["phone"], name: e.payload.doc.data()["name"]}
//       })
// }
