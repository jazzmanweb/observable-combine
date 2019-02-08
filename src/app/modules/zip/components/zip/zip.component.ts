import {Component} from '@angular/core';
import {IconsEnum, StyleEnum} from '../../../../common/style.enum';
import {getRandomColor, getRandomIcon} from '../../../../common/enum.utils';
import {Observable, Subject, zip} from 'rxjs';
import {StateTuppleType} from '../../../../common/state-tupple.type';
import {StateModel} from '../../../../common/state.model';
import {SingleStateModel} from '../../../../common/single-state.model';
import {AbstractObservableComponent} from '../../../../common/abstract-observable.component';

@Component({
    selector: 'zip',
    templateUrl: './zip.component.html',
    styleUrls: ['./zip.component.css']
})
export class ZipComponent extends AbstractObservableComponent {
    public index = 1;
    public state$: Observable<StateTuppleType>;
    public background$: Subject<SingleStateModel<StyleEnum>>;
    public color$: Subject<SingleStateModel<StyleEnum>>;
    public icon$: Subject<SingleStateModel<IconsEnum>>;

    public state: Array<SingleStateModel<StateModel>> = [];
    public background: Array<SingleStateModel<StyleEnum>> = [];
    public color: Array<SingleStateModel<StyleEnum>> = [];
    public icon: Array<SingleStateModel<IconsEnum>> = [];

    constructor() {
        super();
        this.background$ = new Subject();
        this.color$ = new Subject();
        this.icon$ = new Subject();

        this.state$ = zip(
            this.background$,
            this.icon$,
            this.color$,
        );
    }

    public subscribeToState() {
        this.state$.subscribe(([background, icon, color]) => {
            this.state.push(new SingleStateModel({
                value: new StateModel({
                    background: background.value,
                    icon: icon.value,
                    color: color.value,
                }),
                index: this.index,
            }));
        });
    }

    public nextBackground() {
        this.background$.next(new SingleStateModel({
            value: getRandomColor(),
            index: this.index,
        }));
        this.next();
    }

    public nextIcon() {
        this.icon$.next(new SingleStateModel({
            value: getRandomIcon(),
            index: this.index,
        }));
        this.next();
    }

    public nextColor() {
        this.color$.next(new SingleStateModel({
            value: getRandomColor(),
            index: this.index,
        }));
        this.next();
    }
}

