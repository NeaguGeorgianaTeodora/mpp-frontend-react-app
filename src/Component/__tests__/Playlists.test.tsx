import {fireEvent, render} from '@testing-library/react';
import {describe, it, vi} from 'vitest';
import Playlists from '../Playlists';

describe('Playlists', () => {
    const mockPlaylists = [
        {
            Id: 1,
            Name: 'Playlist 1',
            CreatorName: 'Creator 1',
            SongsNumber: 10,
            Rating: 4,
            Songs: [],
        },
        {
            Id: 2,
            Name: 'Playlist 2',
            CreatorName: 'Creator 2',
            SongsNumber: 5,
            Rating: 3,
            Songs: [],
        },
    ];

    it('renders playlist data correctly', () => {
        const {getByText} = render(
            <Playlists
                list={mockPlaylists}
                onDeleteClick={() => {}}
                onEditClick={() => {}}
                onViewClick={() => {}}
            />,
        );

        mockPlaylists.forEach((playlist) => {
            expect(getByText(playlist.Name)).toBeTruthy();
            expect(getByText(playlist.CreatorName)).toBeTruthy();
            expect(getByText(String(playlist.SongsNumber))).toBeTruthy();
            expect(getByText(String(playlist.Rating))).toBeTruthy();
        });
    });

    it('calls correct functions when action buttons are clicked', () => {
        const onDeleteClickMock = vi.fn();
        const onEditClickMock = vi.fn();
        const onViewClickMock = vi.fn();

        const {getAllByRole} = render(
            <Playlists
                list={mockPlaylists}
                onDeleteClick={onDeleteClickMock}
                onEditClick={onEditClickMock}
                onViewClick={onViewClickMock}
            />,
        );

        const actionButtons = getAllByRole('button');
        fireEvent.click(actionButtons[0]); // Click View button for the first playlist
        fireEvent.click(actionButtons[1]); // Click Edit button for the first playlist
        fireEvent.click(actionButtons[2]); // Click Delete button for the first playlist

        expect(onViewClickMock).toHaveBeenCalledTimes(1);
        expect(onEditClickMock).toHaveBeenCalledWith(mockPlaylists[0]);
        expect(onDeleteClickMock).toHaveBeenCalledWith(mockPlaylists[0]);
    });
});
