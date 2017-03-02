import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';

import {College} from '../College';
import {State} from '../State';

@Injectable()
export class FirebaseService{
    colleges : FirebaseListObservable<College[]>;
    states : FirebaseListObservable<State[]>;

    constructor(private _af: AngularFire){

    }

getColleges(state:string = null){
    if(state != null){
        this.colleges = this._af.database.list('/colleges', {query :{orderByChild :'state', equalTo : state}}) as FirebaseListObservable<College[]>
    }else{
        this.colleges = this._af.database.list('/colleges') as FirebaseListObservable<College[]>
    }
    
     return this.colleges;
}

getStates(){
    this.states = this._af.database.list('/states') as FirebaseListObservable<State[]>
     return this.states;
}







}