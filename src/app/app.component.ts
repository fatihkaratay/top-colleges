import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';

import {College} from './College';
import {State} from './State';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [FirebaseService]

})


export class AppComponent {
  colleges : College[];
  states : State[];

  constructor(private _firebaseService : FirebaseService){

  }

  ngOnInit(){
    this._firebaseService.getColleges().subscribe(colleges =>{
      this.colleges = colleges;
    });

    this._firebaseService.getStates().subscribe(states =>{
      this.states = states;
    });

  }

    filterState(state){
      
      if(state == "0"){
            this._firebaseService.getColleges().subscribe(colleges =>{
            this.colleges = colleges;
    });
      this._firebaseService.getStates().subscribe(states =>{
      this.states = states;
    });

      }else{
        this._firebaseService.getColleges(state).subscribe(colleges =>{
        this.colleges = colleges;
         });
      }
    }


}
