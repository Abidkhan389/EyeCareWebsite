import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-eye',
  imports: [NgClass, RouterLink,CommonModule],
  templateUrl: './eye.component.html',
  styleUrl: './eye.component.scss',
  standalone:true,
})
export class EyeComponent {
  constructor(
    public router: Router
  ) {}
   dentistsSlides: OwlOptions = {
      nav: false,
      margin: 25,
      loop: true,
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      navText: [
              '<i class="flaticon-011-chevron-1"></i>',
              '<i class="flaticon-010-chevron"></i>'
      ],
          responsive: {
              0: {
                  items: 1
              },
              515: {
                  items: 2
              },
              695: {
                  items: 2
              },
              935: {
                  items: 3
              },
              1200: {
                  items: 3
              }
          }
      }

}
