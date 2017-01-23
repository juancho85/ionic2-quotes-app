import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import quotes from '../../data/quotes'
import {QuotesPage} from "../quotes/quotes";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {

  quotesPage: QuotesPage;
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  constructor(private navCtrl: NavController) {}

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }

  onClickQuoteGroup(quoteGroup: {category: string, quotes: Quote[], icon: string}) {
    this.navCtrl.push(QuotesPage, quoteGroup);
  }



}
