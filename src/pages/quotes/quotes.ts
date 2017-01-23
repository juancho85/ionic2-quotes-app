import {Component, OnInit} from '@angular/core';
import {NavParams} from "ionic-angular";
import {Quote} from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams){}

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote){
    console.log("adding to favorite");
  }


}
