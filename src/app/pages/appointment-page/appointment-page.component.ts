import { Component } from '@angular/core';
import { FeaturesComponent } from '../../common/features/features.component';
import { AppointmentComponent } from '../../common/appointment/appointment.component';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-appointment-page',
    imports: [FeaturesComponent, AppointmentComponent, RouterLink],
    templateUrl: './appointment-page.component.html',
    styleUrls: ['./appointment-page.component.scss']
})
export class AppointmentPageComponent {
    
    constructor(
        public router: Router
    ) {}

   
}