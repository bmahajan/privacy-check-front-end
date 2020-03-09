import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import data from '../data/sampledata'
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
            data={data}
            margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
            spacing={46}
            titleAlign="start"
            titleOffsetX={-70}
            measureSize={0.2}
            rangeColors="red_yellow_green"
            animate={true}
            motionStiffness={90}
            motionDamping={12}
        />
        </Box>
    )

    return MyResponsiveBullet({data});
}
