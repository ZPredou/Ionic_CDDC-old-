import { Component ,OnInit , Injectable} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DetailPage } from '../detail/detail';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
    providers: [[Vibration]]
})
@Injectable()
export class ContactPage implements OnInit {
  oeuvres:any[] = [];

  constructor(public nav: NavController ,private vibration: Vibration ,private http: HttpClient) {
    this.nav = nav;
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
