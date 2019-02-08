import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ExampleArrayComponent} from './components/example-array/example-array.component';
import {ExampleArrayInTimeComponent} from './components/example-array-in-time/example-array-in-time.component';

const routes: Routes = [
    {
        path: 'example',
        children: [
            {
                path: '',
                redirectTo: 'example-array',
                pathMatch: 'full'
            },
            {
                path: 'example-array',
                component: ExampleArrayComponent,
            },
            {
                path: 'example-array-in-time',
                component: ExampleArrayInTimeComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ExampleRoutingModule {
}
