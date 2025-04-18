import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-dentists',
    imports: [NgClass, RouterLink, CarouselModule],
    templateUrl: './dentists.component.html',
    styleUrls: ['./dentists.component.scss']
})
export class DentistsComponent {

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

    goToDoctorDetails(doctorName: string) {
        this.router.navigate(['/dentist-details'], { queryParams: { name: doctorName } });
      }
}