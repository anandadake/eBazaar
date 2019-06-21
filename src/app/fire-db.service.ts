import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { RowData } from './row-data';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  private dbpath = '/cities';
  private fireData : AngularFirestoreCollection<RowData> = null;
  private city:string;
  private store:string;
  private counter:string;

  constructor(private db:AngularFirestore) {
    this.fireData = db.collection(this.dbpath);
   }
   setCity(city){
     this.city = city;
   }
   getCity(){
     return this.city;
   }
   setStore(store){
     this.store = store;
   }
   getStore(){
     return this.store;
   }
   /* ************************************************** */
   addData(data:RowData):void{
     this.fireData.add({...data});
   }
   /* ************************************************** */   
   getData(){
    return this.fireData;
   }
   getCities(){
     /* /cities/$CITY/stores */
     let cityName = this.dbpath + '/' + this.city +'/stores';
     this.fireData = this.db.collection(cityName);
   }
   getStores(){
     /* /cities/$CITY/stores/$STORE/counters */
    let storeName = this.dbpath + '/' + this.city +'/stores/' + this.store + '/counters';
    this.fireData = this.db.collection(storeName);
   }
  
}
