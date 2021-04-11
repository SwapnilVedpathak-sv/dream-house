import { Component, OnInit,  ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DreamHouseService } from '../dream-house.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
}
}