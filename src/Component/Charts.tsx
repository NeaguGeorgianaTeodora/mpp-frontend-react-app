import {BarChart} from '@mui/x-charts/BarChart';
import {exampleList} from './Playlist.type.ts';

export default function ChartsOverviewDemo() {
    return (
        <BarChart
            xAxis={[
                {
                    id: 'barCategories',
                    data: [
                        exampleList[0].Name,
                        exampleList[1].Name,
                        exampleList[2].Name,
                    ],
                    scaleType: 'band',
                },
            ]}
            series={[
                {
                    data: [
                        exampleList[0].Rating,
                        exampleList[1].Rating,
                        exampleList[2].Rating,
                    ],
                },
            ]}
            width={500}
            height={300}
        />
    );
}
