import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WidgetSidebarComponent } from '../../common/widget-sidebar/widget-sidebar.component';

@Component({
    selector: 'app-blog-details-page',
    imports: [RouterLink, WidgetSidebarComponent],
    templateUrl: './blog-details-page.component.html',
    styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent {}