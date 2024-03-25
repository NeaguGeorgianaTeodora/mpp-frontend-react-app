import {ISong} from './Song.type.tsx';
//import Grid from 'react-grid-layout';
import Grid from '@mui/material/Grid';

type Props = {
    data: ISong[];
    onBackBtnClick: () => void;
};
const ViewPlaylist = (props: Props) => {
    const {data, onBackBtnClick} = props;
    return (
        <>
            <Grid container spacing={2}>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                    </tr>
                    {data.map((songs) => {
                        return (
                            <tr key={songs.Id}>
                                <td>{songs.Title}</td>
                                <td>{songs.Artist}</td>
                            </tr>
                        );
                    })}
                </table>
                <div>
                    <input
                        type='button'
                        value='Back'
                        onClick={onBackBtnClick}
                    />
                    <input type='submit' value='Add' />
                </div>
            </Grid>
        </>
    );
};
export default ViewPlaylist;
