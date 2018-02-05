import { Component ,OnInit , Injectable, trigger, state, style, animate, transition} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DetailPage } from '../detail/detail';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [[Vibration]],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '1' })),
      transition('void <=> *', animate('250ms ease-in'))
    ])
  ]
})
@Injectable()
export class ContactPage implements OnInit {
  oeuvres:any[] = [];
  searchText='';
  actualOeuvres:any[] = [];

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
  noneSelected(){
    return this.oeuvres.filter(oeuvre => oeuvre.isSelected).length===0;
  }
  onKey(e) {
        if (e.keyCode == 13) {
            let activeElement = <HTMLElement>document.activeElement;
            activeElement && activeElement.blur && activeElement.blur();
          }
  }
}
