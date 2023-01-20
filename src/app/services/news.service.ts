import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { INews } from '../interface/news.interface';
import { INewsDto } from '../views/pages/news-list/news.dto';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

// interface INewsNew {
// 	news: {
// 		items: INews[];
// 		totalCount: number;
// 	};
// }

@Injectable({
	providedIn: 'root',
})
export class NewsService {
	constructor(private http: HttpClient) {}

	getNewsNPage(counter: number): Observable<INewsDto> {
		return this.http.get<INewsDto>(`https://webapi.autodoc.ru/api/news/${counter}/10`).pipe(
			// map((response) => ({
			// 	news: { items: response.news, totalCount: response.totalCount },
			// }))
      // map(({news}) => news),
      // tap((news) => console.log(news)),
		);
	}

	getOneNews(url: string): Observable<any> {
		return this.http.get(`https://webapi.autodoc.ru/api/news/item/${url}`);
	}
}
