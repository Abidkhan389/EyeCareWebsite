import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmergencyRegistrationComponent } from '../../common/emergency-registration/emergency-registration.component';

@Component({
    selector: 'app-register-for-vaccine-page',
    imports: [RouterLink, EmergencyRegistrationComponent],
    templateUrl: './register-for-vaccine-page.component.html',
    styleUrls: ['./register-for-vaccine-page.component.scss']
})
export class RegisterForVaccinePageComponent {}