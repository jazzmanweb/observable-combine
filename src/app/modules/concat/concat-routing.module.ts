import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ConcatComponent} from './components/concat/concat.component';

const routes: Routes = [
    {
        path: 'concat',
        children: [
            {
                path: '',
                redirectTo: 'concat',
                pathMatch: 'full'
            },
            {
                path: 'concat',
                component: ConcatComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ConcatRoutingModule {
}
