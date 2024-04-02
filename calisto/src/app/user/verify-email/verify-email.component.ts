import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    //const currentMessage = setTimeout(() => {
      //this.router.navigate(['/company/company-list']);
    //}, 3000)
  }

  // ngOnDestroy(): void {
  //   this.currentMessage.uns
  // }

}
