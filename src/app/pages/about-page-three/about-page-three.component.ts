import { Component } from '@angular/core';
import { FeaturesComponent } from '../../common/features/features.component';
import { AboutComponent } from '../../common/about/about.component';
import { AppointmentComponent } from '../../common/appointment/appointment.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { DentistsComponent } from '../../common/dentists/dentists.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about-page-three',
    imports: [FeaturesComponent, AboutComponent, AppointmentComponent, WhyChooseUsComponent, FeedbackComponent, DentistsComponent, RouterLink],
    templateUrl: './about-page-three.component.html',
    styleUrls: ['./about-page-three.component.scss']
})
export class AboutPageThreeComponent {}