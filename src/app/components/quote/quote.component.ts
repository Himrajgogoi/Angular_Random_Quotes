import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalQuote } from 'src/app/models/localQuote';
import { Quote } from 'src/app/models/quote';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
 @Input() quote !: Quote | LocalQuote;
 @Input() text !: string;
 @Input() details !: string;
 @Output() addQuoteToSaved = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
     this.addQuoteToSaved.emit();
  }

  hasRoute(url: string){
       return this.router.url === url;
  }

}
