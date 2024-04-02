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
  getCompanyById(id : string){
    return this.afs.collection('Companies').doc(id).valueChanges();
  }

  getOwnerUid(id: any){
   return this.afs.collection('Companies').doc(id).snapshotChanges();
  }

  //get all companies
  getAllCompanies(){
    return this.afs.collection('Companies').snapshotChanges();
    
  }

  delete(id: string): Promise<void> {
    return this.afs.collection('Companies').doc(id).delete();
  }

   //update company 2
     update(id: string, data: any): Promise<void> {
    return this.afs.collection('Companies').doc(id).update(data);
  }
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
