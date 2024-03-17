import {fireEvent, render} from '@testing-library/react';
import AddPlaylist from '../AddPlaylist';

describe('AddPlaylist', () => {
    it('calls onSubmitClick with correct data when form is submitted', () => {
        const onSubmitClickMock = jest.fn();
        const mockFormData = {
            Id: 0,
            Name: 'Test Playlist',
            CreatorName: 'Test Creator',
            Rating: 4,
            Songs: [],
            SongsNumber: 0,
        };

        const {getByLabelText, getByText} = render(
            <AddPlaylist
                onBackBtnClick={() => {}}
                onSubmitClick={onSubmitClickMock}
            />,
        );

        fireEvent.change(getByLabelText('Playlist Name: '), {
            target: {value: mockFormData.Name},
        });

        fireEvent.change(getByLabelText('Creator Name: '), {
            target: {value: mockFormData.CreatorName},
        });

        fireEvent.change(getByLabelText('Rating: '), {
            target: {value: mockFormData.Rating},
        });

        fireEvent.submit(getByText('Add'));

        expect(onSubmitClickMock).toHaveBeenCalledWith(mockFormData);
    });

    it('calls onBackBtnClick when Back button is clicked', () => {
        const onBackBtnClickMock = jest.fn();
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
