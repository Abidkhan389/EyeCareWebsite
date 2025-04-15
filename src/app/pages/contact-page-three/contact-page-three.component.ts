import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactInfoComponent } from '../../common/contact-info/contact-info.component';

@Component({
    selector: 'app-contact-page-three',
    imports: [RouterLink, ContactInfoComponent],
    templateUrl: './contact-page-three.component.html',
    styleUrls: ['./contact-page-three.component.scss']
})
export class ContactPageThreeComponent {}