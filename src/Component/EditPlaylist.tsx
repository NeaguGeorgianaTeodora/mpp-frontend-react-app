import {IPlaylist} from './Playlist.type.ts';
import './PlaylistForm.style.css';
import {useState} from 'react';

type Props = {
    data: IPlaylist;
    onBackBtnClick: () => void;
    onUpdateBtnClick: (data: IPlaylist) => void;
};

const EditPlaylist = (props: Props) => {
    const {data, onBackBtnClick, onUpdateBtnClick} = props;
    const [playlistName, setPlaylistName] = useState(data.Name);
    const [creator, setCreator] = useState(data.CreatorName);
    const [rating, setRating] = useState(data.Rating);

    const onFirstNaemChange = (e: any) => {
        setPlaylistName(e.target.value);
    };

    const onCreatorChange = (e: any) => {
        setCreator(e.target.value);
    };

    const onRatingChange = (e: any) => {
        setRating(e.target.value);
    };

    const onSubmitBtnClick = (e: any) => {
        e.preventDefault();
        const updatedData: IPlaylist = {
            Id: data.Id,
            Name: playlistName,
            CreatorName: creator,
            Rating: Number(rating),
            Songs: [],
            SongsNumber: 0,
        };
        onUpdateBtnClick(updatedData);
        onBackBtnClick();
    };

    return (
        <>
            <div className='form-container'>
                <h3>Add Playlist Form</h3>
                <form onSubmit={onSubmitBtnClick}>
                    <div>
                        <label>Playlist Name: </label>
                        <input
                            data-testid={'playlist_input'}
                            type='text'
                            value={playlistName}
                            onChange={onFirstNaemChange}
                        />
                    </div>
                    <div>
                        <label>Creator Name: </label>
                        <input
                            data-testid={'creator_input'}
                            type='text'
                            value={creator}
                            onChange={onCreatorChange}
                        />
                    </div>
                    <div>
                        <label>Rating: </label>
                        <input
                            data-testid={'rating_input'}
                            type='number'
                            min='0'
                            max='5'
                            value={rating}
                            onChange={onRatingChange}
                        />
                    </div>
                    <div>
                        <input type='submit' value='Update' />
                    </div>
                </form>
            </div>
        </>
    );
};
export default EditPlaylist;
