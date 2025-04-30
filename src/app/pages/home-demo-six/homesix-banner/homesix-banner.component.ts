import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NumberShortenerPipe } from "../../../custompipe/number-shortener.pipe";

@Component({
    selector: 'app-homesix-banner',
    imports: [RouterLink, NumberShortenerPipe],
    templateUrl: './homesix-banner.component.html',
    styleUrls: ['./homesix-banner.component.scss']
})
export class HomesixBannerComponent {}