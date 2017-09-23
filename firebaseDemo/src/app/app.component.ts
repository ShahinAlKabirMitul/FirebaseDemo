import { Subscription } from 'rxjs/Rx';

import { any } from 'codelyzer/util/function';
import { Component, OnDestroy } from '@angular/core';
import{AngularFireDatabase} from 'angularfire2/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses$;
  
 constructor(db:AngularFireDatabase){
   this.courses$=db.list('/courses');
  

 }
 
}
