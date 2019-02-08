import {Component, OnInit} from '@angular/core';
import {IconsEnum, StyleEnum} from '../../../../common/style.enum';
import {getRandomColor, getRandomIcon} from '../../../../common/enum.utils';
import {StateModel} from '../../../../common/state.model';

@Component({
    selector: 'example-array',
    templateUrl: './example-array.component.html',
    styleUrls: ['./example-array.component.css']
})
export class ExampleArrayComponent implements OnInit {
    public index = 0;
    public state: StateModel[] = [];
    public background: StyleEnum[] = [];
    public icon: IconsEnum[] = [];
    public color: StyleEnum[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    public next() {
        this.index++;
        this.state.push(new StateModel({
            background: this.background.slice(-1)[0],
            icon: this.icon.slice(-1)[0],
            color: this.color.slice(-1)[0],
        }));
    }

    public nextBackground() {
        this.background.push(getRandomColor());
        this.next();
    }

    public nextIcon() {
        this.icon.push(getRandomIcon());
        this.next();
    }

    public nextColor() {
        this.color.push(getRandomColor());
        this.next();
    }
}
