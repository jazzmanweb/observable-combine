import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RaceComponent} from './components/race/race.component';

const routes: Routes = [
    {
        path: 'race',
        children: [
            {
                path: '',
                redirectTo: 'race',
                pathMatch: 'full'
            },
            {
                path: 'race',
                component: RaceComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RaceRoutingModule {
}
