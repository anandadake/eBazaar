import { Component, OnInit } from '@angular/core';
import { FireDBService } from '../fire-db.service';
import { RowData } from '../row-data';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  data:RowData [];
  constructor(private _FireDBService:FireDBService) { }

  ngOnInit() {
    this.getList();
  }
  getList(){
    this._FireDBService.getData().snapshotChanges().pipe(
      map(chenges =>
        chenges.map(c =>({key:c.payload.doc.id,...c.payload.doc.data()})))
    ).subscribe(cust =>{
      this.data = cust;
    });
  }
  setCity(cityName){
    console.log(cityName);
    this._FireDBService.setCity(cityName);
    this._FireDBService.getCities();
  }

}
