import {ISong} from './Song.type.tsx';

export interface IPlaylist {
    Id: number;
    Name: string;
    CreatorName: string;
    SongsNumber: number;
    Rating: number;
    Songs: ISong[];
}

export enum PageEnum {
    list,
    add,
    edit,
    view,
}
