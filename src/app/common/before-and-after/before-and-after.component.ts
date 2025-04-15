import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-before-and-after',
    imports: [CarouselModule],
    templateUrl: './before-and-after.component.html',
    styleUrls: ['./before-and-after.component.scss']
})
export class BeforeAndAfterComponent {

    beforeAfterSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
        center: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-015-left-arrow"></i>',
            '<i class="flaticon-014-right-arrow"></i>'
		],
        responsive: {
            0: {
                items: 2
            },
            515: {
                items: 2
            },
            695: {
                items: 2
            },
            935: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    }

}