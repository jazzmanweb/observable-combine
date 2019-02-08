import {Observable, Subject} from 'rxjs';
import {OnInit} from '@angular/core';

export abstract class AbstractObservableComponent implements OnInit {
    public index = 1;
    public state$?: Observable<any>;
    public background$?: Subject<any>;
    public color$?: Subject<any>;
    public icon$?: Subject<any>;
    public stateError$?: Subject<any>;
    public backgroundSubject$?: Subject<any> = new Subject();
    public colorSubject$?: Subject<any> = new Subject();
    public iconSubject$?: Subject<any> = new Subject();
    public state?: any;
    public background?: any;
    public color?: any;
    public icon?: any;

    public ngOnInit() {
        this.subscribeToBackground();
        this.subscribeToIcon();
        this.subscribeToColor();
        this.subscribeToState();
    }

    public next() {
        this.index++;
    }

    public abstract subscribeToState();

    private subscribeToBackground() {
        this.background$.subscribe((background) => {
            this.background.push(background);
            this.icon.push(null);
            this.color.push(null);
        });
    }

    private subscribeToIcon() {
        this.icon$.subscribe((icon) => {
            this.background.push(null);
            this.icon.push(icon);
            this.color.push(null);
        });
    }

    private subscribeToColor() {
        this.color$.subscribe((color) => {
            this.background.push(null);
            this.icon.push(null);
            this.color.push(color);
        });
    }


    public completeBackground() {
        this.background$.complete();
        this.backgroundSubject$.next('complete');

    }

    public completeIcon() {
        this.icon$.complete();
        this.iconSubject$.next('complete');

    }

    public completeColor() {
        this.color$.complete();
        this.colorSubject$.next('complete');

    }

    public errorBackground() {
        this.background$.error('background error');
        this.backgroundSubject$.next('error');
    }

    public errorIcon() {
        this.icon$.error('icon error');
        this.iconSubject$.next('error');
    }

    public errorColor() {
        this.color$.error('color error');
        this.colorSubject$.next('error');
    }
}
