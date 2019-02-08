import {IconsEnum, StyleEnum} from './style.enum';
import {StateInterface} from './state.interface';

export class StateModel implements StateInterface {
    public background: StyleEnum;
    public color: StyleEnum;
    public icon: IconsEnum;

    constructor(options?: StateInterface) {
        options = options || {};
        this.background = options.background || null;
        this.color = options.color || null;
        this.icon = options.icon || null;
    }
}
