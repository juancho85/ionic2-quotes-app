import {Component, OnInit} from '@angular/core';
import {NavParams, AlertController} from "ionic-angular";
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService){}

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead!',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, not ready!',
          role: 'cancel',//the handler is executed even if we dismiss by clicking outside
          handler: () => {
            console.log("Cancel!");
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }


}
