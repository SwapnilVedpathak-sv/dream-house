import { Component, OnInit,  ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DreamHouseService } from '../dream-house.service';
import  {MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private house: DreamHouseService) { }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource:any;

  ngOnInit(): void {
    this.house.getList().subscribe((result)=>{
      this.dataSource = result
      console.log("dataSource",this.dataSource);
     })
  }
}
