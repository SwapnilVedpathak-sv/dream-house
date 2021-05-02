import { Component, OnInit,  ViewChild, Inject, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DreamHouseService } from '../dream-house.service';
import  {MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateExpenceComponent } from '../update-expence/update-expence.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private house: DreamHouseService, public dialog: MatDialog) {

   }
  displayedColumns = ['id', 'moneyPaidBy', 'toWhomMoneyPaid', 'category', 'billDate', 'totalAmount', 'paidAmount', 'pendingAmount', 'pending'];
  collection:any = []


  dataSource:any;

  ngOnInit(): void {
    this.house.getList().subscribe((result)=>{
      this.collection = result;
      console.log("dataSource", this.collection);
      console.log("dataSource", this.collection[0].paidBy);
     })
     setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.collection);
      this.dataSource.paginator = this.paginator;
      console.log('settimeout')
      console.log("this.dataSource",this.dataSource)
      console.log("this.dataSource.paginator",this.dataSource)
     },
     9000);

  }

  onRowClicked(row:any) {
    console.log('Row clicked: ', row);
}
  openDialog(row: any) {
    console.log('Row clicked', row);
    const dialog = this.dialog.open(UpdateExpenceComponent, {
       height: "600px", width: "500px" ,
      // Can be closed only by clicking the close button
      disableClose: true,
      data: row
    });
  }
}
