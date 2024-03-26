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
  getOneCompany(company: Company){
    let companyDetails = this.afs.doc('/Companies/' + company.id).get();
    return companyDetails;
  }

  //get all companies
  getAllCompanies(){
    return this.afs.collection('/Companies').snapshotChanges();
  }

  //delete company
  deleteCompany( company: Company ){
    this.afs.doc('/Companies/' + company.id).delete();
  }

  //update company
  updateCompany( company: Company ){
    this.deleteCompany(company);
    this.addCompany(company);
  }

}
