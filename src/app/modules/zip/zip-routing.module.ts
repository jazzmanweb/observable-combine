import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ZipComponent} from './components/zip/zip.component';

const routes: Routes = [
    {
        path: 'zip',
        children: [
            {
                path: '',
                redirectTo: 'zip',
                pathMatch: 'full'
            },
            {
                path: 'zip',
                component: ZipComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ZipRoutingModule {
}
