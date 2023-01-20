import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { NewsElementComponent } from '../pages/news-list/news-element/news-element.component';
import { NewsListComponent } from '../pages/news-list/news-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [LayoutComponent, FooterComponent, HeaderComponent, NewsListComponent, NewsElementComponent],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		MatButtonModule,
		MatCardModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
		MatDialogModule,
	],
})
export class LayoutModule {}
