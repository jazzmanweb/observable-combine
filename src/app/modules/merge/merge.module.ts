import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';
import {MergeRoutingModule} from './merge-routing.module';
import {MergeComponent} from './components/merge/merge.component';

@NgModule({
    declarations: [
        MergeComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        MergeRoutingModule
    ]
})
export class MergeModule {
}
