import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import sampledata from '../data/sampledata'
import { ResponsiveBullet } from '@nivo/bullet'



const useStyles = makeStyles(theme => ({
    root: {
        height: 250,
    },
}));

export default function DataVisualization(props) {

    const classes = useStyles();

    const MyResponsiveBullet = ({ data }) => (
        <Box className={classes.root}>
        <ResponsiveBullet
            data={sampledata}
            margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
            spacing={46}
            titleAlign="start"
            titleOffsetX={-70}
            measureSize={0.2}
            animate={true}
            motionStiffness={90}
            motionDamping={12}
        />
        </Box>
    )


    // const MyResponsiveLine = ({ data }) => (
    //     <Box className={classes.root}>
    //     <ResponsiveLine
    //         data={sampledata}
    //         margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
    //         xScale={{ type: 'point' }}
    //         yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
    //         curve="natural"
    //         axisTop={null}
    //         axisRight={null}
    //         axisBottom={{
    //             orient: 'bottom',
    //             tickSize: 5,
    //             tickPadding: 5,
    //             tickRotation: 0,
    //             legend: 'transportation',
    //             legendOffset: 36,
    //             legendPosition: 'middle'
    //         }}
    //         axisLeft={{
    //             orient: 'left',
    //             tickSize: 5,
    //             tickPadding: 5,
    //             tickRotation: 0,
    //             legend: 'count',
    //             legendOffset: -40,
    //             legendPosition: 'middle'
    //         }}
    //         colors={{ scheme: 'nivo' }}
    //         enablePoints={false}
    //         pointSize={10}
    //         pointColor={{ theme: 'background' }}
    //         pointBorderWidth={2}
    //         pointBorderColor={{ from: 'serieColor' }}
    //         pointLabel="y"
    //         pointLabelYOffset={-12}
    //         enableArea={true}
    //         areaBlendMode="normal"
    //         areaOpacity={1}
    //         useMesh={true}
    //         legends={[]}
    //     />
    //     </Box>
    // )

    return MyResponsiveBullet(sampledata);
}
