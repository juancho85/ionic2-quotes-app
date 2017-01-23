import {Component, ViewChild} from '@angular/core';
import {Platform, NavController, MenuController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  //We need to get access to the child to access the navigation stack (after template initialisation)
  //nav: Local reference in the template to the NavController (#nav)
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  onLoad(page: any) {
    //replace currently active root page (root attribute of the navigation stack)
    this.nav.setRoot(page);
    //close the currently opened menu
    this.menuCtrl.close();
  }
}
