import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-what-we-do',
    imports: [RouterLink, CarouselModule],
    templateUrl: './what-we-do.component.html',
    styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent {
    
    whatWeDoSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: false,
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
                items: 4
            }
        }
    }

}