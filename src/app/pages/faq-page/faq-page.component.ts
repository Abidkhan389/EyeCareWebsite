import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccordionComponent, AccordionPanelComponent } from 'ngx-bootstrap/accordion';

@Component({
    selector: 'app-faq-page',
    imports: [RouterLink, AccordionComponent, AccordionPanelComponent],
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent {

    oneAtATime = true;
    isFirstOpen = true;

}