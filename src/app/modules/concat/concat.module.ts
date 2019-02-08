import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';
import {ConcatRoutingModule} from './concat-routing.module';
import {ConcatComponent} from './components/concat/concat.component';

@NgModule({
    declarations: [
        ConcatComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        ConcatRoutingModule
    ]
})
export class ConcatModule {
}
