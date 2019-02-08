import {Component, OnInit} from '@angular/core';
import {IconsEnum, StyleEnum} from '../../../../common/style.enum';
import {getRandomColor, getRandomIcon} from '../../../../common/enum.utils';
import {StateModel} from '../../../../common/state.model';
import {AbstractObservableComponent} from '../../../../common/abstract-observable.component';

@Component({
    selector: 'example-array-in-time',
    templateUrl: './example-array-in-time.component.html',
    styleUrls: ['./example-array-in-time.component.css']
})
export class ExampleArrayInTimeComponent {
    public index = 0;
    public state: StateModel[] = [];
    public background: StyleEnum[] = [];
    public icon: IconsEnum[] = [];
    public color: StyleEnum[] = [];

    constructor() {
    }

    public next() {
        this.index++;
        this.state.push({
            background: this.background.slice(-1)[0] || (this.state && this.state.length && this.state.slice(-1)[0].background || null),
            icon: this.icon.slice(-1)[0] || (this.state && this.state.length && this.state.slice(-1)[0].icon || null),
            color: this.color.slice(-1)[0] || (this.state && this.state.length && this.state.slice(-1)[0].color || null),
        });
    }

    public nextBackground() {
        this.addBackground(getRandomColor());
        this.addIcon(null);
        this.addColor(null);
        this.next();
    }

    public nextIcon() {
        this.addBackground(null);
        this.addIcon(getRandomIcon());
        this.addColor(null);
        this.next();
    }

    public nextColor() {
        this.addBackground(null);
        this.addIcon(null);
        this.addColor(getRandomColor());
        this.next();
    }

    private addBackground(param) {
        if (this.background.length) {
            this.background.push(param);
            return;
        }
        if (param) {
            this.background = Array(this.index + 1).fill(null);
            this.background[0] = getRandomColor();
            this.background.push(param);
        }
    }

    private addIcon(param) {
        if (this.icon.length) {
            this.icon.push(param);
            return;
        }
        if (param) {
            this.icon = Array(this.index + 1).fill(null);
            this.icon[0] = getRandomIcon();
            this.icon.push(param);
        }
    }

    private addColor(param) {
        if (this.color.length) {
            this.color.push(param);
            return;
        }
        if (param) {
            this.color = Array(this.index + 1).fill(null);
            this.color[0] = getRandomColor();
            this.color.push(param);
        }
    }
}
