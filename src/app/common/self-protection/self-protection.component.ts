import { Component } from '@angular/core';
import { AccordionComponent, AccordionPanelComponent } from 'ngx-bootstrap/accordion';

@Component({
    selector: 'app-self-protection',
    imports: [AccordionPanelComponent, AccordionComponent],
    templateUrl: './self-protection.component.html',
    styleUrls: ['./self-protection.component.scss']
})
export class SelfProtectionComponent {

    oneAtATime = true;

}