import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { AboutPage } from '../about/about';
import { SchoolPage } from '../school/school';
import { HomePage } from '../home/home';
import { SuperTabsModule, SuperTabsController} from 'ionic2-super-tabs';

@Component({
  templateUrl: 'tabs.html',
  providers: [[Vibration]]
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SchoolPage;

  constructor(private vibration: Vibration, private superTabsCtrl: SuperTabsController) {

  }

  private vibrate(){
    this.vibration.vibrate([30]);
  }
}
