import { Component, OnInit, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DreamHouseService } from '../dream-house.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
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
  selector: 'app-update-expence',
  templateUrl: './update-expence.component.html',
  styleUrls: ['./update-expence.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class UpdateExpenceComponent implements OnInit {

  editResto = new FormGroup({
    moneyPaidBy: new FormControl(''),
    toWhomMoneyPaid: new FormControl(''),
    totalAmount: new FormControl(''),
    paidAmount: new FormControl(''),
    pendingAmount: new FormControl(''),
    billDate: new FormControl(''),
    category: new FormControl(''),
    imageData: new FormControl(''),
  })

  date = new FormControl(moment());

  constructor(
    public dialogRef: MatDialogRef<UpdateExpenceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private house : DreamHouseService,
    private http:HttpClient,
  ) { }


  ngOnInit() {
    console.log('Dialog got', this.data);
    this.editResto = new FormGroup({
      moneyPaidBy: new FormControl(this.data['moneyPaidBy']),
      toWhomMoneyPaid: new FormControl(this.data['toWhomMoneyPaid']),
      totalAmount: new FormControl(this.data['totalAmount']),
      paidAmount: new FormControl(this.data['paidAmount']),
      pendingAmount: new FormControl(this.data['pendingAmount']),
      billDate: new FormControl(this.data['billDate']),
      category: new FormControl(this.data['category']),
      imageData: new FormControl(this.data['imageData'])
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }
  updateCurrentExpences(){
    this.house.updateExpences(this.data._id, this.data)
  }

  
  selectImage(event:any){

    if(event.target.files.length > 0){
      const file = event.target.files[0];
      // this.imageData=file;
      // console.log("this.imageData",this.imageData)
    }
  }

  collection(){


    console.log("item",this.editResto.value)
    this.house.updateExpences(this.data._id,this.editResto.value).subscribe((result)=>{
      console.log("result",result)
      // this.alert= true;
    })
    // form.value.file=this.imageData;

      // const formData = new FormData();
      // formData.append('moneyPaidBy',this.data.moneyPaidBy)
      // formData.append('toWhomMoneyPaid',this.data.toWhomMoneyPaid)
      // formData.append('totalAmount',this.data.totalAmount)
      // formData.append('paidAmount',this.data.paidAmount)
      // formData.append('pendingAmount',this.data.pendingAmount)
      // formData.append('billDate',this.data.billDate)
      // formData.append('category',this.data.category)
      // formData.append('file',this.data.imageData)

      // this.http.put(`${this.house.baseUrl}${this.house.fetchUrl}/${this.data._id}`,formData).subscribe((res)=>{
      //   console.log(res);
      //   // this.reset();
      // })
  }

  // reset(){
  //   this.moneyPaidBy = ' ';
  //   this.toWhomMoneyPaid = ' ';
  //   this.totalAmount = ' ';
  //   this.paidAmount = ' ';
  //   this.pendingAmount = ' ';
  //   this.billDate = '';
  //   this.category = ' ';
  //   this.imageData = ' ';
  // }
}
