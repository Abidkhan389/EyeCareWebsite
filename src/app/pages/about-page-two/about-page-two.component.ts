import { Component } from '@angular/core';
import { AboutComponent } from '../../common/about/about.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { DentistsComponent } from '../../common/dentists/dentists.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { CallUsComponent } from '../../common/call-us/call-us.component';
import { AppointmentComponent } from '../../common/appointment/appointment.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about-page-two',
    imports: [AboutComponent, FunfactsComponent, DentistsComponent, FeedbackComponent, FeaturesComponent, CallUsComponent, AppointmentComponent, RouterLink],
    templateUrl: './about-page-two.component.html',
    styleUrls: ['./about-page-two.component.scss']
})
export class AboutPageTwoComponent {}