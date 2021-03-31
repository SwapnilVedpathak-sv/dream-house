import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DreamHouseService } from '../dream-house.service'

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.scss']
})
export class AddExpencesComponent implements OnInit {
  images:any;
  constructor(private http:HttpClient,
              private house:DreamHouseService
  ) { }

  ngOnInit(): void {
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
