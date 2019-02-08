import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleArrayComponent} from './components/example-array/example-array.component';
import {ExampleRoutingModule} from './example-routing.module';
import {AngularMaterialModule} from '../angular-material.module';
import {ExampleArrayInTimeComponent} from './components/example-array-in-time/example-array-in-time.component';

@NgModule({
    declarations: [
        ExampleArrayComponent,
        ExampleArrayInTimeComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        ExampleRoutingModule
    ]
})
export class ExampleModule {
}
