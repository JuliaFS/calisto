import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/compat/firestore';
import { Company } from '../model/company';
import {
  collection,
  collectionChanges,
  Firestore,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath = 'companies';

  companyRef: AngularFirestoreCollection<Company>;

  constructor(private db: AngularFirestore) {
    this.companyRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Company> {
    return this.companyRef;
  }

  create(company: Company): any {
    return this.companyRef.add({ ...company });
  }

  update(id: string, data: any): Promise<void> {
    return this.companyRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.companyRef.doc(id).delete();
  }

  // getOneCompany(id: string): Promise<void> {
  //   //return this.companyRef.doc(id).get().pipe;
  //   return this.db.collectionGroup
  // }

  getObjectById(id : string){
    return this.db.collection('companies').doc(id).valueChanges();
  }

    //getOneCompany(id: string): Promise<void>{
      //return  this.afs.doc<phonebook>(`${}/${id}`).valueChanges()
      //return this.db.doc(db, `companies/${id}`).valueChanges();
     //this.companyRef.doc('/ompanies/' + id).valueChanges();
     //return this.db.doc(id).snapshotChanges;
    //this.companyRef.doc(id);
    
    

  // getCompany(id: string){
  //   //const data = this.companyRef.doc.data() as Company;
  //   return this.companyRef?.doc(id);
  //   //  items2$: Observable<Company> = collectionChanges(
  //   //   collection(this.firestore, 'foodList')
  //   // ).pipe(
  //   //   map((items) => items.map( (item) => {
  //   //     const data = item.doc.data() as FoodItem;
  //   //     const id = `prefix-${item.doc.id}`;
  
  //   //     return { id, ...data }
  //   //   }))
  //   // );
  // }
}


// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Company } from '../model/company';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor(private afs: AngularFirestore) { }

//   //add company
//   addCompany(company: Company){
//     company.id = this.afs.createId();

//     return this.afs.collection('/Companies').add(company);
//   }

//   //getOne company
//   getOneCompany(company: Company){
//     this.afs.doc('/Companies/' + company.id).get();
//     // console.log('in data servise company.id: ' + company.id);
//     // this.afs.doc('/Companies/' + company.id).valueChanges().subscribe(data => {
//     //   console.log(data);
//     // });

//     // this.afs.collection('/Companies').snapshotChanges().subscribe((data) => {
//     //   this.data.map(e => {
//     //     return {id: e.payload.doc.id };
//     //   })
      
//       // hospitalsArray = data.map(e => {
//       //   return { id: e.payload.doc.id, location: e.payload.doc.data()["location"], number: e.payload.doc.data()["phone"], name: e.payload.doc.data()["name"]}
//       // })
//   //})
// }

//   updateDoc(_id: string, _value: string) {
//     let doc = this.afs.collection('options', ref => ref.where('id', '==', _id));
//     doc.snapshotChanges().subscribe((res: any) => {
//       let id = res[0].payload.doc.id;
//       this.afs.collection('options').doc(id).update({rating: _value});
//     });
//   }
//   //get all companies
//   getAllCompanies(){
//     return this.afs.collection('/Companies').snapshotChanges();
//   }

//   //delete company
//   deleteCompany( company: Company ){
//     this.afs.doc('/Companies/' + company.id).delete();
//   }

//   //update company
//   updateCompany( company: Company ){
//     this.deleteCompany(company);
//     this.addCompany(company);
//   }

// }



// >>>>>>>>>>>>>>>
// constructor(private firestore:AngularFirestore){}
// hospitalsArray=[];
// ngOnInit(){
//     this.firestore.collection("hospitals").snapshotChanges().subscribe((data) => {
//       this.hospitalsArray = data.map(e => {
//         return { id: e.payload.doc.id, location: e.payload.doc.data()["location"], number: e.payload.doc.data()["phone"], name: e.payload.doc.data()["name"]}
//       })
// }
