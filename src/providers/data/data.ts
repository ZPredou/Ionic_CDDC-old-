import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
  private _oeuvres$: any;
  private _db: any;
  private _oeuvresRef: any;

  constructor() {
    this._db = firebase.database().ref('/');
    this._oeuvresRef = firebase.database().ref('oeuvres');
    this._oeuvresRef.on('child_added', this.handleData, this);
  }
  get oeuvres()
  {
    return this._oeuvres$;
  }
  handleData(snap) {
    try {
      // Tell our observer we have new data
      this._oeuvres$.next(snap.val());
    }
    catch (error) {
      console.log('catching', error);
    }
  }
}
