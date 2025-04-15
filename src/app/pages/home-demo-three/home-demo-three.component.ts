import { Component } from '@angular/core';
import { HomethreeBannerComponent } from './homethree-banner/homethree-banner.component';
import { HomethreeFeaturesComponent } from './homethree-features/homethree-features.component';
import { ServicesComponent } from '../../common/services/services.component';
import { AppointmentComponent } from '../../common/appointment/appointment.component';
import { AboutComponent } from '../../common/about/about.component';
import { RecentWorksComponent } from '../../common/recent-works/recent-works.component';
import { DentistsComponent } from '../../common/dentists/dentists.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BlogComponent } from '../../common/blog/blog.component';

@Component({
    selector: 'app-home-demo-three',
    imports: [HomethreeBannerComponent, HomethreeFeaturesComponent, ServicesComponent, AppointmentComponent, AboutComponent, RecentWorksComponent, DentistsComponent, FeedbackComponent, BlogComponent],
    templateUrl: './home-demo-three.component.html',
    styleUrls: ['./home-demo-three.component.scss']
})
export class HomeDemoThreeComponent {}