import {IconsEnum, StyleEnum} from './style.enum';
import {SingleStateModel} from './single-state.model';

export type StateSimpleTuppleType = [
    SingleStateModel<StyleEnum>,
    SingleStateModel<IconsEnum>
    ];

export type StateTuppleType = [
    SingleStateModel<StyleEnum>,
    SingleStateModel<IconsEnum>,
    SingleStateModel<StyleEnum>
    ];
