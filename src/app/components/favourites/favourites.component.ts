import { Component, OnInit } from '@angular/core';
import { LocalQuote } from 'src/app/models/localQuote';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  quotes !: LocalQuote[];

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
     this.quotesService.getLocalQuotes().subscribe(q=>this.quotes = q)
  }

  deleteQuote(quote: LocalQuote){
    this.quotesService.deleteQuote(quote.id).subscribe(q=>window.location.reload());
  }

}
