import { Component, OnInit } from '@angular/core';
import { CarouselItem } from './carousel-item.model';

import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'swipe-animation';
  carouselItems: CarouselItem[] = [];

  ngOnInit(): void {
    let i = 0;
    while (i < 20) {
      i++;
      this.carouselItems.push({
        id: i,
        description: `Item ${i} description `,
        title: `Iitem ${i} title `
      });
    }
  }
}
