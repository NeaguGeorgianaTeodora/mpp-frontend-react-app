import {fireEvent, render, screen} from '@testing-library/react';
import {describe, it, vi} from 'vitest';
import AddPlaylist from '../AddPlaylist';

describe('AddPlaylist', () => {
    it('calls onSubmitClick with correct data when form is submitted', () => {
        const onSubmitClickMock = vi.fn();
        const mockFormData = {
            Id: 1,
            Name: 'Test Playlist',
            CreatorName: 'Test Creator',
            Rating: 4,
            Songs: [],
            SongsNumber: 0,
        };

        const {getByText} = render(
            <AddPlaylist
                onBackBtnClick={() => {}}
                onSubmitClick={onSubmitClickMock}
            />,
        );

        fireEvent.change(screen.getByTestId('playlist_input'), {
            target: {value: mockFormData.Name},
        });

        fireEvent.change(screen.getByTestId('creator_input'), {
            target: {value: mockFormData.CreatorName},
        });

        fireEvent.change(screen.getByTestId('rating_input'), {
            target: {value: mockFormData.Rating},
        });

        fireEvent.submit(getByText('Add'));

        expect(onSubmitClickMock).toHaveBeenCalledWith(mockFormData);
    });

    it('calls onBackBtnClick when Back button is clicked', () => {
        const onBackBtnClickMock = vi.fn();
        const {getByText} = render(
            <AddPlaylist
                onBackBtnClick={onBackBtnClickMock}
                onSubmitClick={() => {}}
            />,
        );

        fireEvent.click(getByText('Back'));

        expect(onBackBtnClickMock).toHaveBeenCalledTimes(1);
    });
});
