import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';
import {CombineLatestRoutingModule} from './combine-latest-routing.module';
import {CombineLatestComponent} from './components/combine-latest/combine-latest.component';

@NgModule({
    declarations: [
        CombineLatestComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        CombineLatestRoutingModule
    ]
})
export class CombineLatestModule {
}
