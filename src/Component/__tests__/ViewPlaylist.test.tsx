import {fireEvent, render} from '@testing-library/react';
import {describe, it, vi} from 'vitest';
import ViewPlaylist from '../ViewPlaylist.tsx';

const mockSongs = [
    {Id: 1, Title: 'Song 1', Artist: 'Artist 1', Lyrics: ''},
    {Id: 2, Title: 'Song 2', Artist: 'Artist 2', Lyrics: ''},
];

describe('ViewPlaylist', () => {
    it('calls onBackBtnClick when Back button is clicked', () => {
        const onBackBtnClickMock = vi.fn();
        const {getByText} = render(
            <ViewPlaylist
                data={mockSongs}
                onBackBtnClick={onBackBtnClickMock}
            />,
        );

        fireEvent.click(getByText('Back'));
        expect(onBackBtnClickMock).toHaveBeenCalledTimes(1);
    });
});
