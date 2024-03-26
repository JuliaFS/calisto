import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
@Input 

  constructor(private data: DataService, private activeRoute: ActivatedRoute ){ }

  //this.activeRoute.params.subscribe()
  ngOnInit(): void {
    this.activeRoute.params.subscribe( (data) => {
      //const id = data['themeId'];
      console.log(data)
      const id = data['uid'];
      console.log('id' + id);
    })
  }
  //this.data.getOne()

}
