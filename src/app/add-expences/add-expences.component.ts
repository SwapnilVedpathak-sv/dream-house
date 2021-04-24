import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DreamHouseService } from '../dream-house.service';
import {FormControl, FormGroup, FormBuilder, NgForm} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { ActivatedRoute } from '@angular/router';

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

  image:any;
  multipleimage = [];
  // Id;
  moneyPaidBy:any;
  toWhomMoneyPaid:any;
  totalAmount:any;
  paidAmount:any;
  pendingAmount:any;
  billDate:any;
  category:any;
  imageData:any;
  data=[];







  // formatedDate:any;
  // NewExpence : FormGroup;
  // date = new FormControl(moment());
  // formData = new FormData();
  // images:any;

  constructor(private http:HttpClient, private house:DreamHouseService, private fb : FormBuilder, private router: ActivatedRoute) {
    // this.NewExpence = this.fb.group({
    //   moneyPaidBy:[],
    //   toWhomMoneyPaid:[],
    //   totalAmount:[],
    //   paidAmount:[],
    //   pendingAmount:[],
    //   category:[],
    //   datePicker:[]
    // })
   }

  ngOnInit(): void {
  }

  selectImage(event:any){

    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.imageData=file;
      console.log("",this.image)
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

      this.http.post('http://localhost:8000/imageUpload',formData).subscribe((res)=>{
        console.log(res);
        // this.resert();
        // this.fetchdataList();

      })

  }

  // clickme(){
  //   this.house.addExpences(this.NewExpence.value)
  //   .subscribe(data => {
  //     data
  //     console.log("Responce",data)
  //   },err => {
  //     console.log("Errooor",err)
  //   })
  //   let trimDate = this.NewExpence.value.datePicker._i;
  //   this.formatedDate = `${trimDate.date}-${trimDate.month+1}-${trimDate.year}`;
  //   console.log(`${trimDate.date}-${trimDate.month+1}-${trimDate.year}`);
  //   console.log("ran",this.NewExpence.value)
  // }
}
