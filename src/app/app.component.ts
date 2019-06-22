import { Component } from '@angular/core';
import { CarouselItem } from './carousel-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swipe-animation';
  carouselItems: CarouselItem[] = [{
    id: 1,
    title: 'item 1',
    description: 'desc item 1'
  },
  {
    id: 1,
    title: 'item 1',
    description: 'desc item 1'
  },
  {
    id: 1,
    title: 'item 1',
    description: 'desc item 1'
  }];
}
