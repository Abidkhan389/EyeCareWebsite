import { Component } from '@angular/core';
import { HomesevenBannerComponent } from './homeseven-banner/homeseven-banner.component';
import { HomesevenFormComponent } from './homeseven-form/homeseven-form.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { AboutComponent } from '../../common/about/about.component';
import { EmergencyRegistrationComponent } from '../../common/emergency-registration/emergency-registration.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { ApprovedVaccineComponent } from '../../common/approved-vaccine/approved-vaccine.component';
import { SelfProtectionComponent } from '../../common/self-protection/self-protection.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BlogComponent } from '../../common/blog/blog.component';

@Component({
    selector: 'app-home-demo-seven',
    imports: [HomesevenBannerComponent, HomesevenFormComponent, FeaturesComponent, AboutComponent, EmergencyRegistrationComponent, HowItWorksComponent, ApprovedVaccineComponent, SelfProtectionComponent, FeedbackComponent, BlogComponent],
    templateUrl: './home-demo-seven.component.html',
    styleUrls: ['./home-demo-seven.component.scss']
})
export class HomeDemoSevenComponent {}