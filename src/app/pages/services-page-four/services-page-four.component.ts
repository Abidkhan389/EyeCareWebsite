import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartnerComponent } from '../../common/partner/partner.component';

@Component({
    selector: 'app-services-page-four',
    imports: [RouterLink, PartnerComponent],
    templateUrl: './services-page-four.component.html',
    styleUrls: ['./services-page-four.component.scss']
})
export class ServicesPageFourComponent {}