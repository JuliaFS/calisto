import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit{
  //@Input() currentCompany: Company = {};
  company : Company = {};


  companyId : any = this.act.snapshot.paramMap.get('id');

  currentCompany : any = {
    name: '',
    country: '',
    working_capital: 0,
    invested_capital: 0,
    published: false,
  };

  message = '';

  constructor(private data: DataService, private act: ActivatedRoute){}

  ngOnInit(): void {
    //const companyId = this.act.snapshot.paramMap.get('id');
    //const companyId = this.act.params.subscribe((data) => {
      //console.log(data);
    //};
    this.message = '';
    //----------------------------------------------------------------
    this.data.getObjectById(this.companyId).subscribe( (data) => {
      console.log('currentCompany before: ' + this.currentCompany);
      this.currentCompany = data;
      console.log('currentCompany after: ' + this.currentCompany);
    });
    //------------------------------------------------------------------
    console.log('outsidde: ' + this.currentCompany);
    //console.log(test);

    // console.log('test ref: ' + test.subscribe(data => {
    //   console.log(data);
    // }));


    //this.currentCompany = { ...this.company };
    //console.log(this.company)
    console.log(this.companyId);
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentCompany = { ...this.company };
  }

  updatePublished(status: boolean): void {
    console.log('updatePublished: ' + this.currentCompany.id);
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

  refreshList(): void {
    this.currentCompany = {};
    //this.currentIndex = -1;
    //this.retrieveCompanies();
  }
}
