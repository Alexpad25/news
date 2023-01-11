import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}
  getNewsNPage(counter: number): Observable<any> {
    return this.http.get(`https://webapi.autodoc.ru/api/news/${counter}/10`);
  }

  getOneNews(url: string): Observable<any> {
    return this.http.get(`https://webapi.autodoc.ru/api/news/item/${url}`);
  }
}
