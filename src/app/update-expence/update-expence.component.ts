import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DreamHouseService } from '../dream-house.service'

@Component({
  selector: 'app-update-expence',
  templateUrl: './update-expence.component.html',
  styleUrls: ['./update-expence.component.scss']
})
export class UpdateExpenceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateExpenceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private house : DreamHouseService
  ) { }


  ngOnInit() {
    console.log('Dialog got', this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }
  updateCurrentExpences(){
    this.house.updateExpences(this.data._id, this.data)
  }
}
