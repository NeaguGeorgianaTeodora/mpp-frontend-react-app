import {ISong} from './Song.type.tsx';

export interface IPlaylist {
    Id: number;
    Name: string;
    CreatorName: string;
    SongsNumber: number;
    Rating: number;
    Songs: ISong[];
}

export const exampleList: IPlaylist[] = [
    {
        Id: 0,
        Name: 'P1',
        CreatorName: 'Georgiana',
        SongsNumber: 7,
        Rating: 5,
        Songs: [],
    },
    {
        Id: 1,
        Name: 'P2',
        CreatorName: 'Alex',
        SongsNumber: 10,
        Rating: 4,
        Songs: [],
    },
    {
        Id: 2,
        Name: 'P3',
        CreatorName: 'Andra',
        SongsNumber: 20,
        Rating: 3,
        Songs: [],
    },
];

export enum PageEnum {
    list,
    add,
    edit,
    view,
}
