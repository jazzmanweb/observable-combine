import {SingleStateInterface} from './single-state.interface';

export class SingleStateModel<T> implements SingleStateInterface<T> {
    public index: number | string;
    public value: T;

    constructor(options?: SingleStateInterface<T>) {
        options = options || {};
        this.index = options.index || null;
        this.value = options.value || null;
    }
}
