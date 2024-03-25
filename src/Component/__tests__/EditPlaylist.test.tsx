import {fireEvent, render, screen} from '@testing-library/react';
import {describe, it, vi} from 'vitest';
import EditPlaylist from '../EditPlaylist';

describe('EditPlaylist', () => {
    const mockPlaylist = {
        Id: 1,
        Name: 'Test Playlist',
        CreatorName: 'Test Creator',
        Rating: 4,
        Songs: [],
        SongsNumber: 0,
    };

    it('updates playlist data and calls onUpdateBtnClick when form is submitted', () => {
        const onUpdateBtnClickMock = vi.fn();
        const onBackBtnClickMock = vi.fn();

        const {getByText} = render(
            <EditPlaylist
                data={mockPlaylist}
                onBackBtnClick={onBackBtnClickMock}
                onUpdateBtnClick={onUpdateBtnClickMock}
            />,
        );

        const updatedPlaylistData = {
            ...mockPlaylist,
            Name: 'Updated Playlist',
            CreatorName: 'Updated Creator',
            Rating: 5,
        };

        fireEvent.change(screen.getByTestId('playlist_input'), {
            target: {value: updatedPlaylistData.Name},
        });

        fireEvent.change(screen.getByTestId('creator_input'), {
            target: {value: updatedPlaylistData.CreatorName},
        });

        fireEvent.change(screen.getByTestId('rating_input'), {
            target: {value: updatedPlaylistData.Rating},
        });

        fireEvent.submit(getByText('Update'));

        expect(onUpdateBtnClickMock).toHaveBeenCalledWith(updatedPlaylistData);
        expect(onBackBtnClickMock).toHaveBeenCalledTimes(1);
    });
});
