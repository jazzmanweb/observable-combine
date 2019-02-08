import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CombineLatestComponent} from './components/combine-latest/combine-latest.component';

const routes: Routes = [
    {
        path: 'combine-latest',
        children: [
            {
                path: '',
                redirectTo: 'combine-latest',
                pathMatch: 'full'
            },
            {
                path: 'combine-latest',
                component: CombineLatestComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CombineLatestRoutingModule {
}
