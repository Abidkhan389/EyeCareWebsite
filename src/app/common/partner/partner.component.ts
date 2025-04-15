import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner',
    imports: [CarouselModule],
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {

    partnerSlides: OwlOptions = {
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
                items: 2
            },
            485: {
                items: 3
            },
            695: {
                items: 3
            },
            835: {
                items: 4
            },
            1195: {
                items: 5
            }
        }
    }

}
