import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WidgetSidebarComponent } from '../../common/widget-sidebar/widget-sidebar.component';

@Component({
    selector: 'app-blog-right-sidebar-page',
    imports: [RouterLink, WidgetSidebarComponent],
    templateUrl: './blog-right-sidebar-page.component.html',
    styleUrls: ['./blog-right-sidebar-page.component.scss']
})
export class BlogRightSidebarPageComponent {}