import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MergeComponent} from './components/merge/merge.component';

const routes: Routes = [
    {
        path: 'merge',
        children: [
            {
                path: '',
                redirectTo: 'merge',
                pathMatch: 'full'
            },
            {
                path: 'merge',
                component: MergeComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MergeRoutingModule {
}
