import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DreamHouseService } from './dream-house.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images:any;
  constructor(private house:DreamHouseService,
    private http:HttpClient) { }
  title = 'dream-house';
  
  ngOnInit(): void {
    this.house.getList().subscribe((result)=>{
     console.log(result);
    })
  }

  selectImage(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit(event:any){
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>(`${this.house.baseUrl}${this.house.ImageURL}`, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}