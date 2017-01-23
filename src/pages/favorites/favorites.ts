import { Component } from '@angular/core';
import {ModalController, MenuController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
    // modal.willLeave.subscribe(
    //   //will not pass the data!!!
    //   (remove: boolean) => console.log(remove)
    // );
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    // this.quotes = this.quotesService.getFavoriteQuotes();
    const foundQuote = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id== quote.id;
    });
    this.quotes.splice(foundQuote, 1);
  }

  getBackgroundColor(){
    let backgroundColor = 'quoteBackground'
    if(this.settingsService.isAlternativeBackground()) {
      backgroundColor = 'altQuoteBackground';
    }
    return backgroundColor;
  }

}
