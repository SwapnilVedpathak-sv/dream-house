import { Component, OnInit,  ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { DreamHouseService } from '../dream-house.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination:any= MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable:any= MdbTableDirective
  elements: any = [];
  previous: any = [];
  headElements = ['ID', 'First', 'Last', 'Handle'];
  Data:any = [];

  constructor(private cdRef: ChangeDetectorRef,
    private house:DreamHouseService) { }

  ngOnInit(): void {

    this.house.getList().subscribe((result)=>{
      console.log(result);
      this.Data = result;
     })

    for (let i = 1; i <= 18; i++) {
      this.elements.push({id: i.toString()});        
  }
  // this.arrayWithId;
  // Array.prototype.push.apply(this.Data,this.elements); 
  // this.elements = [...this.elements, ...this.Data];

  // console.log("ran",this.Data)

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
}
