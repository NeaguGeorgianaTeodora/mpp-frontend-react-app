import {fireEvent, render} from '@testing-library/react';
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
        const onUpdateBtnClickMock = jest.fn();
        const onBackBtnClickMock = jest.fn();

        const {getByLabelText, getByText} = render(
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

        fireEvent.change(getByLabelText('Playlist Name: '), {
            target: {value: updatedPlaylistData.Name},
        });

        fireEvent.change(getByLabelText('Creator Name: '), {
            target: {value: updatedPlaylistData.CreatorName},
        });

        fireEvent.change(getByLabelText('Rating: '), {
            target: {value: updatedPlaylistData.Rating},
        });

        fireEvent.submit(getByText('Update'));

        expect(onUpdateBtnClickMock).toHaveBeenCalledWith(updatedPlaylistData);
        expect(onBackBtnClickMock).toHaveBeenCalledTimes(1);
    });
});
