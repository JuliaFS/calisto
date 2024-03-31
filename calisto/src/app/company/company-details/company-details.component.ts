import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from 'src/app/user/auth.service';

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

  constructor(private data: DataService, private act: ActivatedRoute,
              private auth: AuthService){ }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(){
  this.data.getCompanyById(this.companyId).subscribe( res => {
      this.currentCompany = res;
    });
  }

  showModal(){
    this.isClickedDelete = !this.isClickedDelete;

    this.message = "Are you want to delete this company?"
  
  }
    deleteCompany(): void {
      this.data.delete(this.companyId)
        .then(() => {
          this.message = 'The company was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  
}
