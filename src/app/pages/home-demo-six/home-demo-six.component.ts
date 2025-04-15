import { Component } from '@angular/core';
import { HomesixBannerComponent } from './homesix-banner/homesix-banner.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { AboutComponent } from '../../common/about/about.component';
import { EyeCareServicesComponent } from '../../common/eye-care-services/eye-care-services.component';
import { WhatWeOfferComponent } from '../../common/what-we-offer/what-we-offer.component';
import { DoctorsComponent } from '../../common/doctors/doctors.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-home-demo-six',
    imports: [HomesixBannerComponent, FeaturesComponent, AboutComponent, EyeCareServicesComponent, WhatWeOfferComponent, DoctorsComponent, FeedbackComponent, HowItWorksComponent, BlogComponent, SubscribeComponent],
    templateUrl: './home-demo-six.component.html',
    styleUrls: ['./home-demo-six.component.scss']
})
export class HomeDemoSixComponent {}