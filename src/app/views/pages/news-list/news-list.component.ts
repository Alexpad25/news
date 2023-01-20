import { Component, HostListener, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewsComponent } from './dialog-news/dialog-news.component';
import { delay, tap } from 'rxjs';
import { INews } from '../../../interface/news.interface';

@Component({
	selector: 'app-news-list',
	templateUrl: './news-list.component.html',
	styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
	counter: number = 1;
	loadlist: boolean = true;

	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		const pos =
			(document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
		const max = document.documentElement.scrollHeight;

		// console.log('pos', pos, 'max', max);
		if (pos == max) {
			this.counter++;
			this.newsService
				.getNewsNPage(this.counter)
				.pipe(
					tap(() => {
						this.loadlist = true;
					}),
					delay(3000),
				)
				.subscribe((value) => {
					this.pageNews = [...this.pageNews, ...value.news];
					console.log('this.pageNews', this.pageNews);
					this.loadlist = false;
				});
			// console.log('scroll end')
		}
	}

	pageNews: INews[] = [];
	name?: string;

	constructor(private newsService: NewsService, private router: Router, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.newsService.getNewsNPage(this.counter).subscribe((value) => {
			this.pageNews = value.news;
			console.log('this.pageNews', this.pageNews);

			this.loadlist = false;
		});
	}

	selectCart(item: any) {
		const url = item.url.replace('/', '%2F');
		console.log('url', url);

		this.router.navigate(['news/', url]);
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogNewsComponent, {
			data: null,
		});

		dialogRef.afterClosed().subscribe((result) => {
			// console.log('The dialog was closed');
			console.log('result', result);

			localStorage.setItem('news', JSON.stringify(result.value));
		});
	}
}
