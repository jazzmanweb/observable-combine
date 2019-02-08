import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';
import {RaceRoutingModule} from './race-routing.module';
import {RaceComponent} from './components/race/race.component';

@NgModule({
    declarations: [
        RaceComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        RaceRoutingModule
    ]
})
export class RaceModule {
}
