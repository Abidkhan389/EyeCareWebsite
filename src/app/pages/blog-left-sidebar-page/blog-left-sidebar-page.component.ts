import { Component } from '@angular/core';
import { WidgetSidebarComponent } from '../../common/widget-sidebar/widget-sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-left-sidebar-page',
    imports: [WidgetSidebarComponent, RouterLink],
    templateUrl: './blog-left-sidebar-page.component.html',
    styleUrls: ['./blog-left-sidebar-page.component.scss']
})
export class BlogLeftSidebarPageComponent {}