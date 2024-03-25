import Playlists from './Playlists.tsx';
import './Playlists.style.css';
import {exampleList, IPlaylist, PageEnum} from './Playlist.type.ts';
import {useState} from 'react';
import AddPlaylist from './AddPlaylist.tsx';
import EditPlaylist from './EditPlaylist.tsx';
import ViewPlaylist from './ViewPlaylist.tsx';
import BarChartStat from './Charts.tsx';
import {ISong} from './Song.type.tsx';
//import {useNavigate} from 'react-router-dom';

const Home = () => {
    //const [playlists, setPlaylists] = useState([] as IPlaylist[]);
    const [playlists, setPlaylists] = useState(exampleList as IPlaylist[]);
    const [songs] = useState([] as ISong[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as IPlaylist);
    const onAddPlaylistClick = () => {
        setShownPage(PageEnum.add);
    };

    const onSortPlaylistClick = () => {
        const tempList = [...playlists];
        const sortedList = tempList.sort((a, b) => (a.Name > b.Name ? 1 : -1));
        _setPlaylists(sortedList);
    };
    const showListPage = () => {
        setShownPage(PageEnum.list);
    };

    const _setPlaylists = (list: IPlaylist[]) => {
        setPlaylists(list);
        window.localStorage.setItem('Playlists', JSON.stringify(list));
    };

    const addPlaylistHnd = (data: IPlaylist) => {
        _setPlaylists([...playlists, data]);
    };

    const deletePlaylistHnd = (data: IPlaylist) => {
        const indexToDelete = playlists.indexOf(data);
        const tempList = [...playlists]; //clone playlists list
        tempList.splice(indexToDelete, 1); //delete one item starting from indexToDelete
        _setPlaylists(tempList);
    };
    const editPlaylistHnd = (data: IPlaylist) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    };
    const viewPlaylistHnd = () => {
        setShownPage(PageEnum.view);
    };

    const updatePlaylist = (data: IPlaylist) => {
        const filteredData = playlists.filter((x) => x.Id == data.Id)[0];
        const indexOfRecord = playlists.indexOf(filteredData);
        const tempList = [...playlists];
        tempList[indexOfRecord] = data;
        _setPlaylists(tempList);
    };

    //const navigate = useNavigate();
    return (
        <>
            <section className='section-content'>
                {shownPage === PageEnum.list && (
                    <>
                        <Playlists
                            list={playlists}
                            onDeleteClick={deletePlaylistHnd}
                            onEditClick={editPlaylistHnd}
                            onViewClick={viewPlaylistHnd}
                        />
                        <input
                            type='button'
                            value='Add'
                            onClick={onAddPlaylistClick}
                            className='add-playlist-btn'
                        />
                        <input
                            type='button'
                            value='Sort By Name'
                            onClick={onSortPlaylistClick}
                            className='sort-playlist-btn'
                        />
                        <BarChartStat />
                    </>
                )}
                {shownPage === PageEnum.add && (
                    <AddPlaylist
                        onBackBtnClick={showListPage}
                        onSubmitClick={addPlaylistHnd}
                    />
                )}
                {shownPage === PageEnum.edit && (
                    <EditPlaylist
                        data={dataToEdit}
                        onBackBtnClick={showListPage}
                        onUpdateBtnClick={updatePlaylist}
                    />
                )}
                {shownPage === PageEnum.view && (
                    <ViewPlaylist data={songs} onBackBtnClick={showListPage} />
                )}
            </section>
        </>
    );
};

export default Home;
