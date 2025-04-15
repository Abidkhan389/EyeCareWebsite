import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccordionComponent, AccordionPanelComponent } from 'ngx-bootstrap/accordion';

@Component({
    selector: 'app-service-details-page-two',
    imports: [RouterLink, AccordionComponent, AccordionPanelComponent],
    templateUrl: './service-details-page-two.component.html',
    styleUrls: ['./service-details-page-two.component.scss']
})
export class ServiceDetailsPageTwoComponent {

    oneAtATime = true;

}