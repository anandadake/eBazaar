import { Component, OnInit } from '@angular/core';
import { FireDBService } from '../fire-db.service';
import { map } from 'rxjs/operators';
import { RowData } from '../row-data';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

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

}
