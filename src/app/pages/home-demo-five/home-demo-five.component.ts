import { Component } from '@angular/core';
import { HomefiveBannerComponent } from './homefive-banner/homefive-banner.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { AboutComponent } from '../../common/about/about.component';
import { SkinCareServicesComponent } from '../../common/skin-care-services/skin-care-services.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { AppointmentComponent } from '../../common/appointment/appointment.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BeforeAndAfterComponent } from '../../common/before-and-after/before-and-after.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { PartnerComponent } from '../../common/partner/partner.component';

@Component({
    selector: 'app-home-demo-five',
    imports: [HomefiveBannerComponent, FeaturesComponent, AboutComponent, SkinCareServicesComponent, WhyChooseUsComponent, AppointmentComponent, FeedbackComponent, BeforeAndAfterComponent, BlogComponent, PartnerComponent],
    templateUrl: './home-demo-five.component.html',
    styleUrls: ['./home-demo-five.component.scss']
})
export class HomeDemoFiveComponent {}