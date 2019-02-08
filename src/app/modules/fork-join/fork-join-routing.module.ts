import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ForkJoinComponent} from './components/fork-join/fork-join.component';

const routes: Routes = [
    {
        path: 'fork-join',
        children: [
            {
                path: '',
                redirectTo: 'fork-join',
                pathMatch: 'full'
            },
            {
                path: 'fork-join',
                component: ForkJoinComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ForkJoinRoutingModule {
}
