import { Component } from '@angular/core';
import { HomefourBannerComponent } from './homefour-banner/homefour-banner.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { AboutComponent } from '../../common/about/about.component';
import { WhatWeDoComponent } from '../../common/what-we-do/what-we-do.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { AppointmentComponent } from '../../common/appointment/appointment.component';
import { DentistsComponent } from '../../common/dentists/dentists.component';
import { PopularDestinationsComponent } from '../../common/popular-destinations/popular-destinations.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BlogComponent } from '../../common/blog/blog.component';

@Component({
    selector: 'app-home-demo-four',
    imports: [HomefourBannerComponent, FeaturesComponent, AboutComponent, WhatWeDoComponent, WhyChooseUsComponent, AppointmentComponent, DentistsComponent, PopularDestinationsComponent, FeedbackComponent, BlogComponent],
    templateUrl: './home-demo-four.component.html',
    styleUrls: ['./home-demo-four.component.scss']
})
export class HomeDemoFourComponent {}