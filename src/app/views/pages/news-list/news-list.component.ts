import {Component, HostListener, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogNewsComponent} from "./dialog-news/dialog-news.component";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  counter: number = 1;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (pos == max) {
      this.counter++;
      this.newsService.getNewsNPage(this.counter).subscribe(value => {
        this.pageNews = [...this.pageNews, ...value.news];
        console.log('this.pageNews', this.pageNews)
      })
      // console.log('scroll end')
    }
  }

  pageNews: any[] = [];
  name?: string;

  constructor(private newsService: NewsService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newsService.getNewsNPage(this.counter).subscribe(value => {
      this.pageNews = value.news;
      console.log('this.pageNews', this.pageNews)
    })
  }

  selectCart(item: any) {
    const url = item.url.replace('/','%2F');
    console.log('url', url);

    this.router.navigate(['news/', url]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewsComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log('result', result);

      localStorage.setItem('news', JSON.stringify(result.value));
    });
  }
}
