import {Component} from '@angular/core';

interface MenuInterface {
    name?: string;
    link?: string;
    icon?: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public pages: MenuInterface[] = [
        {
            name: 'Example',
            link: '/example/example-array',
            icon: 'filter_1',
        },
        {
            name: 'Example',
            link: '/example/example-array-in-time',
            icon: 'filter_2',
        },
        {
            name: 'combineLatest',
            link: '/combine-latest',
            icon: 'flight_land',
        },
        {
            name: 'zip',
            link: '/zip',
            icon: 'favorite',
        },
        {
            name: 'race',
            link: '/race',
            icon: 'commute',
        },
        {
            name: 'forkJoin',
            link: '/fork-join',
            icon: 'check',
        },
        {
            name: 'merge',
            link: '/merge',
            icon: 'merge_type',
        },
        {
            name: 'concat',
            link: '/concat',
            icon: 'playlist_add_check',
        },
        {
            name: 'withLatestFrom (2)',
            link: '/with-latest-from',
            icon: 'call_missed_outgoing',
        },
        {
            name: 'withLatestFrom (3)',
            link: '/with-latest-from/with-latest-from-three',
            icon: 'call_missed_outgoing',
        },
    ];
}
