import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';
import {ZipRoutingModule} from './zip-routing.module';
import {ZipComponent} from './components/zip/zip.component';

@NgModule({
    declarations: [
        ZipComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        ZipRoutingModule
    ]
})
export class ZipModule {
}
