import { Component } from '@angular/core';
import { HomeeightBannerComponent } from './homeeight-banner/homeeight-banner.component';
import { CategoriesComponent } from '../../common/categories/categories.component';
import { AboutComponent } from '../../common/about/about.component';
import { AppointmentComponent } from '../../common/appointment/appointment.component';
import { ServicesComponent } from '../../common/services/services.component';
import { SkillsComponent } from '../../common/skills/skills.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { DoctorsComponent } from '../../common/doctors/doctors.component';
import { DigitalHelpComponent } from '../../common/digital-help/digital-help.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { ContactInfoComponent } from '../../common/contact-info/contact-info.component';

@Component({
    selector: 'app-home-demo-eight',
    imports: [HomeeightBannerComponent, CategoriesComponent, AboutComponent, AppointmentComponent, ServicesComponent, SkillsComponent, FunfactsComponent, DoctorsComponent, DigitalHelpComponent, CtaComponent, FeedbackComponent, BlogComponent, ContactInfoComponent],
    templateUrl: './home-demo-eight.component.html',
    styleUrls: ['./home-demo-eight.component.scss']
})
export class HomeDemoEightComponent {}