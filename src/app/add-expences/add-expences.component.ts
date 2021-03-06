import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DreamHouseService } from '../dream-house.service';
import {FormControl, NgForm} from '@angular/forms';
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

  moneyPaidBy:any;
  toWhomMoneyPaid:any;
  totalAmount:any;
  paidAmount:any;
  pendingAmount:any;
  billDate = '';
  category:any;
  imageData:any;

  date = new FormControl(moment());

  constructor(private http:HttpClient, private house:DreamHouseService) { }

  ngOnInit(): void {
  }

  selectImage(event:any){

    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.imageData=file;
      console.log("this.imageData",this.imageData)
    }
  }

  onsubmit(form:NgForm){

    form.value.file=this.imageData;

      const formData = new FormData();
      formData.append('moneyPaidBy',this.moneyPaidBy)
      formData.append('toWhomMoneyPaid',this.toWhomMoneyPaid)
      formData.append('totalAmount',this.totalAmount)
      formData.append('paidAmount',this.paidAmount)
      formData.append('pendingAmount',this.pendingAmount)
      formData.append('billDate',this.billDate)
      formData.append('category',this.category)
      formData.append('file',this.imageData)

      this.http.post(`${this.house.baseUrl}${this.house.ImageURL}`,formData).subscribe((res)=>{
        console.log(res);
        this.reset();
      })
  }

  reset(){
    this.moneyPaidBy = ' ';
    this.toWhomMoneyPaid = ' ';
    this.totalAmount = ' ';
    this.paidAmount = ' ';
    this.pendingAmount = ' ';
    this.billDate = '';
    this.category = ' ';
    this.imageData = ' ';
  }
}
