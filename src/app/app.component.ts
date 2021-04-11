import { Component } from '@angular/core';
import { DreamHouseService } from './dream-house.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private house:DreamHouseService) { }
  title = 'dream-house';
  
  ngOnInit(): void {
    this.house.getList().subscribe((result)=>{
     console.log(result);
    })
    
  }
  
}