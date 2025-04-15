import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-recent-works',
    imports: [NgClass, RouterLink],
    templateUrl: './recent-works.component.html',
    styleUrls: ['./recent-works.component.scss']
})
export class RecentWorksComponent {

    constructor(
        public router: Router
    ) {}

}