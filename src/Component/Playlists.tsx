import './Home.style.css';
import {IPlaylist} from './Playlist.type.ts';

type Props = {
    list: IPlaylist[];
    onDeleteClick: (data: IPlaylist) => void;
    onEditClick: (data: IPlaylist) => void;
    onViewClick: () => void;
};
const Playlists = (props: Props) => {
    const {list, onDeleteClick, onEditClick, onViewClick} = props;
    return (
        <div>
            <article className='article-header'>
                <header>
                    <h1>Playlists</h1>
                </header>
            </article>
            <table>
                <tr>
                    <th>Playlist Name</th>
                    <th>Creator</th>
                    <th>Songs Number</th>
                    <th>Rating</th>
                    <th>Actions</th>
                </tr>
                {list.map((playlist) => {
                    return (
                        <tr key={playlist.Id}>
                            <td>{playlist.Name}</td>
                            <td>{playlist.CreatorName}</td>
                            <td>{playlist.SongsNumber}</td>
                            <td>{playlist.Rating}</td>
                            <td>
                                <div>
                                    <input
                                        type='button'
                                        value='View'
                                        onClick={() => onViewClick()}
                                    />
                                    <input
                                        type='button'
                                        value='Edit'
                                        onClick={() => onEditClick(playlist)}
                                    />
                                    <input
                                        type='button'
                                        value='Delete'
                                        onClick={() => onDeleteClick(playlist)}
                                    />
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Playlists;
