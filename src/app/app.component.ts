import { Component } from '@angular/core';
import { DreamHouseService } from './dream-house.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private resto:DreamHouseService) { }
  title = 'dream-house';

  ngOnInit(): void {

    this.resto.getList().subscribe((result)=>{

     console.log(result);

    })
     }

}
