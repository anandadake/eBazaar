import { Component, OnInit } from '@angular/core';
import { FireDBService } from '../fire-db.service';
import { RowData } from '../row-data';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

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
  setStore(storeName){
    this._FireDBService.setStore(storeName);
    this._FireDBService.getStores();
  }

}
