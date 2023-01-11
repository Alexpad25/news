import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout.component";
import {NewsListComponent} from "../pages/news-list/news-list.component";
import {NewsElementComponent} from "../pages/news-list/news-element/news-element.component";

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'news', pathMatch: "full"},
      {path: 'news', component: NewsListComponent},
      {path: 'news/:id', component: NewsElementComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
