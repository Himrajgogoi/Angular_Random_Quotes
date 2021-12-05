import { Component, OnInit } from '@angular/core';
import { LocalQuote } from 'src/app/models/localQuote';
import { Quote } from 'src/app/models/quote';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quote !: Quote;

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.quotesService.getQuote().subscribe(q=>{this.quote = q;});
  }

  addQuote(quote: Quote){

     var date = new Date();
     var _id = date.getTime();

     const saveQuote: LocalQuote = {
          id: _id,
          content: quote.content,
          author: quote.author
     };

     this.quotesService.postQuote(saveQuote).subscribe(q=>alert("Quote has been saved!"));
  }

}
