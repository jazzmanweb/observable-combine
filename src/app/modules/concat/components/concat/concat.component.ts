import {Component} from '@angular/core';
import {TypeEnum} from '../../../../common/style.enum';
import {getRandomColor, getRandomIcon} from '../../../../common/enum.utils';
import {concat, Observable, Subject} from 'rxjs';
import {SingleStateModel} from '../../../../common/single-state.model';
import {AbstractObservableComponent} from '../../../../common/abstract-observable.component';

@Component({
    selector: 'concat',
    templateUrl: './concat.component.html',
    styleUrls: ['./concat.component.css']
})
export class ConcatComponent extends AbstractObservableComponent {
    public index = 1;
    public typeEnum = TypeEnum;
    public state$: Observable<SingleStateModel<string>>;
    public background$: Subject<SingleStateModel<string>>;
    public color$: Subject<SingleStateModel<string>>;
    public icon$: Subject<SingleStateModel<string>>;

    public state: Array<SingleStateModel<string>> = [];
    public background: Array<SingleStateModel<string>> = [];
    public color: Array<SingleStateModel<string>> = [];
    public icon: Array<SingleStateModel<string>> = [];

    constructor() {
        super();
        this.background$ = new Subject();
        this.color$ = new Subject();
        this.icon$ = new Subject();

        this.state$ = concat(
            this.background$,
            this.icon$,
            this.color$,
        );
    }

    public subscribeToState() {
        this.state$.subscribe((winner: SingleStateModel<string>) => {
            this.state.push(new SingleStateModel(winner));
        });
    }

    public nextBackground() {
        this.background$.next(new SingleStateModel({
            value: getRandomColor(),
            index: TypeEnum.background,
        }));
        this.next();
    }

    public nextIcon() {
        this.icon$.next(new SingleStateModel({
            value: getRandomIcon(),
            index: TypeEnum.icon,
        }));
        this.next();
    }

    public nextColor() {
        this.color$.next(new SingleStateModel({
            value: getRandomColor(),
            index: TypeEnum.color,
        }));
        this.next();
    }
}
