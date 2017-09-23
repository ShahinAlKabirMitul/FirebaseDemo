import { Subscription } from 'rxjs/Rx';

import { any } from 'codelyzer/util/function';
import { Component, OnDestroy } from '@angular/core';
import{AngularFireDatabase} from 'angularfire2/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  subscription:Subscription;
  courses:any;
 constructor(db:AngularFireDatabase){
  this.subscription= db.list('/courses').subscribe(data=>{
      this.courses=data;
      console.log(this.courses);
   });

 }
 ngOnDestroy(){
   console.log('click');
  this.subscription.unsubscribe();  
 }
}
