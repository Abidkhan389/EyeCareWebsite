import { Routes } from '@angular/router';
import { HomeDemoOneComponent } from './pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './pages/home-demo-three/home-demo-three.component';
import { HomeDemoFourComponent } from './pages/home-demo-four/home-demo-four.component';
import { HomeDemoFiveComponent } from './pages/home-demo-five/home-demo-five.component';
import { HomeDemoSixComponent } from './pages/home-demo-six/home-demo-six.component';
import { HomeDemoSevenComponent } from './pages/home-demo-seven/home-demo-seven.component';
import { HomeDemoEightComponent } from './pages/home-demo-eight/home-demo-eight.component';
import { AboutPageOneComponent } from './pages/about-page-one/about-page-one.component';
import { AboutPageTwoComponent } from './pages/about-page-two/about-page-two.component';
import { AboutPageThreeComponent } from './pages/about-page-three/about-page-three.component';
import { DentistsPageComponent } from './pages/dentists-page/dentists-page.component';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page.component';
import { DentistDetailsPageComponent } from './pages/dentist-details-page/dentist-details-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PortfolioDetailsPageComponent } from './pages/portfolio-details-page/portfolio-details-page.component';
import { ServicesPageOneComponent } from './pages/services-page-one/services-page-one.component';
import { ServicesPageTwoComponent } from './pages/services-page-two/services-page-two.component';
import { ServicesPageThreeComponent } from './pages/services-page-three/services-page-three.component';
import { ServicesPageFourComponent } from './pages/services-page-four/services-page-four.component';
import { ServicesPageFiveComponent } from './pages/services-page-five/services-page-five.component';
import { ServicesPageSixComponent } from './pages/services-page-six/services-page-six.component';
import { ServiceDetailsPageOneComponent } from './pages/service-details-page-one/service-details-page-one.component';
import { ServiceDetailsPageTwoComponent } from './pages/service-details-page-two/service-details-page-two.component';
import { AppointmentPageComponent } from './pages/appointment-page/appointment-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { HowVaccinesWorkPageComponent } from './pages/how-vaccines-work-page/how-vaccines-work-page.component';
import { RegisterForVaccinePageComponent } from './pages/register-for-vaccine-page/register-for-vaccine-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { BlogGridPageComponent } from './pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogLeftSidebarPageComponent } from './pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogDetailsPageComponent } from './pages/blog-details-page/blog-details-page.component';
import { ContactPageOneComponent } from './pages/contact-page-one/contact-page-one.component';
import { ContactPageTwoComponent } from './pages/contact-page-two/contact-page-two.component';
import { ContactPageThreeComponent } from './pages/contact-page-three/contact-page-three.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'index-4', component: HomeDemoFourComponent},
    {path: 'index-5', component: HomeDemoFiveComponent},
    {path: 'index-6', component: HomeDemoSixComponent},
    {path: 'index-7', component: HomeDemoSevenComponent},
    {path: 'index-8', component: HomeDemoEightComponent},
    {path: 'about-us', component: AboutPageOneComponent},
    {path: 'about-us-2', component: AboutPageTwoComponent},
    {path: 'about-us-3', component: AboutPageThreeComponent},
    {path: 'dentists', component: DentistsPageComponent},
    {path: 'doctors', component: DoctorsPageComponent},
    {path: 'dentist-details', component: DentistDetailsPageComponent},
    {path: 'portfolio', component: PortfolioPageComponent},
    {path: 'portfolio-details', component: PortfolioDetailsPageComponent},
    {path: 'services', component: ServicesPageOneComponent},
    {path: 'services-2', component: ServicesPageTwoComponent},
    {path: 'services-3', component: ServicesPageThreeComponent},
    {path: 'services-4', component: ServicesPageFourComponent},
    {path: 'services-5', component: ServicesPageFiveComponent},
    {path: 'services-6', component: ServicesPageSixComponent},
    {path: 'service-details', component: ServiceDetailsPageOneComponent},
    {path: 'service-details-2', component: ServiceDetailsPageTwoComponent},
    {path: 'appointment', component: AppointmentPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'how-vaccines-work', component: HowVaccinesWorkPageComponent},
    {path: 'register-for-vaccine', component: RegisterForVaccinePageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-left-sidebar', component: BlogLeftSidebarPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact-us', component: ContactPageOneComponent},
    {path: 'contact-us-2', component: ContactPageTwoComponent},
    {path: 'contact-us-3', component: ContactPageThreeComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];