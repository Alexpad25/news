import { INews } from '../../../interface/news.interface';

export interface INewsDto {
  news: INews[];
	totalCount: number;
}
