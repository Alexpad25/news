import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../../../services/news.service";

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.scss']
})
export class NewsElementComponent implements OnInit {
  id: any;
  oneNews: any;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.newsService.getOneNews(this.id).subscribe(value => {
        this.oneNews = value;
        console.log('value detail', value)
      })
    }
    console.log(this.id);
  }

}
