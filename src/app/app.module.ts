import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ZipModule} from './modules/zip/zip.module';
import {AppRoutingModule} from './app-routing.module';
import {AngularMaterialModule} from './modules/angular-material.module';
import {ExampleModule} from './modules/example/example.module';
import {CombineLatestModule} from './modules/combine-latest/combine-latest.module';
import {RaceModule} from './modules/race/race.module';
import {ConcatModule} from './modules/concat/concat.module';
import {ForkJoinModule} from './modules/fork-join/fork-join.module';
import {WithLatestFromModule} from './modules/with-latest-from/with-latest-from.module';
import {MergeModule} from './modules/merge/merge.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularMaterialModule,
        ExampleModule,
        CombineLatestModule,
        ConcatModule,
        ZipModule,
        RaceModule,
        MergeModule,
        ForkJoinModule,
        WithLatestFromModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
