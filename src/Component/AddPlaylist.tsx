import './PlaylistForm.style.css';
import {useState} from 'react';
import {IPlaylist} from './Playlist.type.ts';
import playlists from './Playlists.tsx';

type Props = {
    onBackBtnClick: () => void;
    onSubmitClick: (data: IPlaylist) => void;
};
const AddPlaylist = (props: Props) => {
    const {onBackBtnClick, onSubmitClick} = props;
    const [playlistName, setPlaylistName] = useState('');
    const [creator, setCreator] = useState('');
    const [rating, setRating] = useState('');

    const onFirstNameChange = (e: any) => {
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
        const data: IPlaylist = {
            Id: playlists.length,
            Name: playlistName,
            CreatorName: creator,
            Rating: Number(rating),
            Songs: [],
            SongsNumber: 0,
        };
        onSubmitClick(data);
    };

    return (
        <>
            <div className='form-container'>
                <h3>Add Playlist Form</h3>
                <form onSubmit={onSubmitBtnClick}>
                    <div>
                        <label>Playlist Name: </label>
                        <input
                            type='text'
                            value={playlistName}
                            onChange={onFirstNameChange}
                        />
                    </div>
                    <div>
                        <label>Creator Name: </label>
                        <input
                            type='text'
                            value={creator}
                            onChange={onCreatorChange}
                        />
                    </div>
                    <div>
                        <label>Rating: </label>
                        <input
                            type='number'
                            min='0'
                            max='5'
                            value={rating}
                            onChange={onRatingChange}
                        />
                    </div>
                    <div>
                        <input
                            type='button'
                            value='Back'
                            onClick={onBackBtnClick}
                        />
                        <input type='submit' value='Add' />
                    </div>
                </form>
            </div>
        </>
    );
};
export default AddPlaylist;
