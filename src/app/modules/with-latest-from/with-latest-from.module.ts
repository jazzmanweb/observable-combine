import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';
import {WithLatestFromRoutingModule} from './with-latest-from-routing.module';
import {WithLatestFromComponent} from './components/with-latest-from/with-latest-from.component';
import {WithLatestFromThreeComponent} from './components/with-latest-from-three/with-latest-from-three.component';

@NgModule({
    declarations: [
        WithLatestFromComponent,
        WithLatestFromThreeComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        WithLatestFromRoutingModule
    ]
})
export class WithLatestFromModule {
}
