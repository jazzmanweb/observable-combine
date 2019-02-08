import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';
import {ForkJoinRoutingModule} from './fork-join-routing.module';
import {ForkJoinComponent} from './components/fork-join/fork-join.component';

@NgModule({
    declarations: [
        ForkJoinComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        ForkJoinRoutingModule
    ]
})
export class ForkJoinModule {
}
