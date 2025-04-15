import { Component } from '@angular/core';
import { HomeoneBannerComponent } from './homeone-banner/homeone-banner.component';
import { BannerFeaturesComponent } from './banner-features/banner-features.component';
import { ServicesComponent } from '../../common/services/services.component';
import { CallUsComponent } from '../../common/call-us/call-us.component';
import { AppointmentComponent } from '../../common/appointment/appointment.component';
import { AboutComponent } from '../../common/about/about.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { DentistsComponent } from '../../common/dentists/dentists.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BlogComponent } from '../../common/blog/blog.component';

@Component({
    selector: 'app-home-demo-one',
    imports: [HomeoneBannerComponent, BannerFeaturesComponent, ServicesComponent, CallUsComponent, AppointmentComponent, AboutComponent, FeaturesComponent, DentistsComponent, FeedbackComponent, BlogComponent],
    templateUrl: './home-demo-one.component.html',
    styleUrls: ['./home-demo-one.component.scss']
})
export class HomeDemoOneComponent {}