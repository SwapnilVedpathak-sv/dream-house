import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DreamHouseService } from '../dream-house.service';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class AddExpencesComponent implements OnInit {
  date = new FormControl(moment());
  legacy = new FormControl();
  images:any;

  constructor(private http:HttpClient, private house:DreamHouseService) { }

  ngOnInit(): void {
  }

  selectImage(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log(file)
    }
  }

  onSubmit(event:any){
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>(`${this.house.baseUrl}${this.house.ImageURL}`, formData).subscribe(
      (res) => console.log("Responce",res),
      (err) => console.log(err)
    );
  }

  moneyPaidBy: string = "";
  toWhomMoneyPaid: string = "";
  // date: string = "";
  totalAmount: string = "";
  paidAmount: string = "";
  pendingAmount: string = "";
  selected: string = "";


  clickme() {

  let formDetails = {
    "moneyPaidBy": this.moneyPaidBy,
    "toWhomMoneyPaid": this.toWhomMoneyPaid,
    "billPaidDate": this.date,
    "totalAmount": this.totalAmount,
    "paidAmount": this.paidAmount,
    "pendingAmount": this.pendingAmount,
    "category": this.selected,
    "legacy": this.legacy
  }

    console.log("it does nothing", formDetails);
    console.log("this.legacy",this.legacy)
  }
}
