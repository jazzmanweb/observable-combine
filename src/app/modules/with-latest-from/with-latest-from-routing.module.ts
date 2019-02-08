import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WithLatestFromComponent} from './components/with-latest-from/with-latest-from.component';
import {WithLatestFromThreeComponent} from './components/with-latest-from-three/with-latest-from-three.component';

const routes: Routes = [
    {
        path: 'with-latest-from',
        children: [
            {
                path: '',
                redirectTo: 'with-latest-from',
                pathMatch: 'full'
            },
            {
                path: 'with-latest-from',
                component: WithLatestFromComponent,
            },
            {
                path: 'with-latest-from-three',
                component: WithLatestFromThreeComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class WithLatestFromRoutingModule {
}
