import { Component, OnInit, Input } from '@angular/core';
import { CarouselItem } from '../carousel-item.model';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {

  @Input() item: CarouselItem;

  constructor() { }

  ngOnInit() {
  }

}
