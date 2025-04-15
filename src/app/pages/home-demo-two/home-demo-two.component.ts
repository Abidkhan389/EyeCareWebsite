import { Component } from '@angular/core';
import { HometwoBannerComponent } from './hometwo-banner/hometwo-banner.component';
import { AboutComponent } from '../../common/about/about.component';
import { ServicesComponent } from '../../common/services/services.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { RecentWorksComponent } from '../../common/recent-works/recent-works.component';
import { AppointmentComponent } from '../../common/appointment/appointment.component';
import { DentistsComponent } from '../../common/dentists/dentists.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BlogComponent } from '../../common/blog/blog.component';

@Component({
    selector: 'app-home-demo-two',
    imports: [HometwoBannerComponent, AboutComponent, ServicesComponent, FeaturesComponent, RecentWorksComponent, AppointmentComponent, DentistsComponent, FeedbackComponent, BlogComponent],
    templateUrl: './home-demo-two.component.html',
    styleUrls: ['./home-demo-two.component.scss']
})
export class HomeDemoTwoComponent {}