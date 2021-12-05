import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../models/quote';
import { Observable } from 'rxjs';
import { LocalQuote } from '../models/localQuote';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

   private apiUrl = 'https://api.quotable.io/random';
   private localUrl = 'http://localhost:5000/quotes';

  constructor(private http: HttpClient) { }

  getQuote(): Observable<Quote>{
    return this.http.get<Quote>(this.apiUrl);
  }
  getLocalQuotes(): Observable<LocalQuote[]>{
    return this.http.get<LocalQuote[]>(this.localUrl);
  }

  postQuote(quote: LocalQuote): Observable<LocalQuote>{
    return this.http.post<LocalQuote>(this.localUrl,quote);
  }
  
  deleteQuote(id?: number): Observable<LocalQuote>{
    return this.http.delete<LocalQuote>(this.localUrl + `/${id}`);
  }


}
