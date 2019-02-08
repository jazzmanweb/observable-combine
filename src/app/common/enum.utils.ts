import {IconsEnum, StyleEnum} from './style.enum';

export function getRandomFromEnum(list): string {
    const index = Math.floor(Math.random() * Object.keys(list).length);
    return list[Object.keys(list).find((item, idx) => index === idx)];
}

export function getRandomColor(): StyleEnum {
    return getRandomFromEnum(StyleEnum) as StyleEnum;
}

export function getRandomIcon(): IconsEnum {
    return getRandomFromEnum(IconsEnum) as IconsEnum;
}
