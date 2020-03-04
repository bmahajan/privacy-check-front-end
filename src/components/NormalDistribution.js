import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import sampledata from '../data/sampledata'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const useStyles = makeStyles(theme => ({
    root: {
        height: 250,
    },
}));

export default function NormalDistribution(props) {

    const classes = useStyles();

    const MyResponsiveLine = ({ data }) => (
        <Box className={classes.root}>
        <ResponsiveLine
            data={sampledata}
            margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            enableArea={true}
            areaBlendMode="normal"
            areaOpacity={1}
            useMesh={true}
            legends={[]}
        />
        </Box>
    )

    return MyResponsiveLine(sampledata);
}
