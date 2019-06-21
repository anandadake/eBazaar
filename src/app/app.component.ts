import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eBazaar';

  public startDate:Date ;
  public endDate:Date ;
  
  valuechange(newValue:Date) {
    var str:String = newValue.toDateString().toString();
    console.log(str);
    var arr = str.split(" ");
    console.log(arr);
    console.log(this.startDate);
    console.log(this.endDate);
  }
}
