import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeseven-banner',
    imports: [RouterLink, NgIf],
    templateUrl: './homeseven-banner.component.html',
    styleUrls: ['./homeseven-banner.component.scss']
})
export class HomesevenBannerComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}