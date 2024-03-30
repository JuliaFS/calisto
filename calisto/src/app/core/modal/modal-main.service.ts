import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalMainService {
  showDialog : boolean = false;
  constructor() { }
}
