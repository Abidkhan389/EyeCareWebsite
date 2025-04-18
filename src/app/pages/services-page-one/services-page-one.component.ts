import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../common/material.module';

@Component({
    selector: 'app-services-page-one',
    imports: [RouterLink,MaterialModule],
    templateUrl: './services-page-one.component.html',
    styleUrls: ['./services-page-one.component.scss']
})
export class ServicesPageOneComponent {}