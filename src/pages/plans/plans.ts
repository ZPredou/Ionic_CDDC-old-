import { Component, OnInit, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DetailPage } from '../detail/detail';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-plans',
  templateUrl: 'plans.html',
  providers: [[Vibration]]
})
@Injectable()
export class PlansPage implements OnInit{
  oeuvres:any[] = [];

  constructor(public nav: NavController, public navParams: NavParams ,private vibration: Vibration ,private http: HttpClient) {
    this.nav = nav;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlansPage');
  }
  ngOnInit(){
      this.http.get('./assets/oeuvres.json').subscribe(data => {
        this.oeuvres = data['oeuvres'];
    });
  }
  private vibrate(){
    this.vibration.vibrate([30]);
  }
  private goToDetail(oeuvre){
    this.nav.push(DetailPage , {
      oeuvre: oeuvre
    });
  }
}
