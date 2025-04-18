import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-dentists-page',
    imports: [RouterLink],
    templateUrl: './dentists-page.component.html',
    styleUrls: ['./dentists-page.component.scss']
})
export class DentistsPageComponent {

    constructor(
        public router: Router
    ) {}
    goToDoctorDetails(doctorName: string) {
        this.router.navigate(['/dentist-details'], { queryParams: { name: doctorName } });
      }
}