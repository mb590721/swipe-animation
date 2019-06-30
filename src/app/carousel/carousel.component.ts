import { Component, OnInit, Input, HostBinding, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CarouselItem } from '../carousel-item.model';
import { ongointPanAnimation, endPanAnimation } from './carousel.animation';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    ongointPanAnimation,
    endPanAnimation
  ]
})
export class CarouselComponent implements OnInit, AfterViewInit {


  @Input() items: CarouselItem[];
  panX = 0;


  @ViewChild('carousel') carouselElement: ElementRef;

  carouselWidth: number;
  // finger move to the left to make appear previous item
  maxLeftPan: number;
  // finger move to the right to make appear next item
  maxRightPan: number;

  currentItemIndex = 0;
  currentItemInitPanX = 0;
  panEnded = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.carouselWidth = this.carouselElement.nativeElement.clientWidth;
    this.computePans();
  }

  pan(event) {

    const currentDeltaX = this.currentItemInitPanX + event.deltaX;
    // stop user from paning when there is no more content to show
    if (currentDeltaX < this.maxLeftPan || currentDeltaX > this.maxRightPan) {
      return;
    }
    this.panX = this.currentItemInitPanX - event.deltaX;
  }

  panStart(event) {
    this.panEnded = false;

  }

  panEnd(event) {

    // if user has at laest move its finger 25% of the container, allow change of item
    if (event.distance / this.carouselWidth > 0.25) {

      // user move its finger to the right of the screen so it's the element at the right which appeared
      if (event.deltaX > 0 && (this.currentItemIndex + 1) < this.items.length) {
        this.currentItemIndex++;

      } else {
        if (event.deltaX < 0 && (this.currentItemIndex) > 0) {
          this.currentItemIndex--;
        }
      }
    }

    this.computePans();
    this.panEnded = true;
  }

  computePans() {
    this.currentItemInitPanX = -(this.currentItemIndex * this.carouselWidth);

    switch (this.currentItemIndex) {
      case 0:
        this.maxLeftPan = this.currentItemInitPanX - this.carouselWidth / 4;
        this.maxRightPan = this.currentItemInitPanX + this.carouselWidth;
        break;
      case this.items.length - 1:
        this.maxLeftPan = this.currentItemInitPanX - this.carouselWidth;
        this.maxRightPan = this.currentItemInitPanX + this.carouselWidth / 4;
        break;
      default:
        this.maxLeftPan = this.currentItemInitPanX - this.carouselWidth;
        this.maxRightPan = this.currentItemInitPanX + this.carouselWidth;
    }
  }
}
