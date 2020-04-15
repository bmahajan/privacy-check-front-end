import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ApiResponseContext} from "../../PanelManager";
import { ResponsiveBullet } from '@nivo/bullet'



const useStyles = makeStyles(theme => ({
  root: {
    height: 125,
  },
}));

export default function ControlDataVisualization(props) {

  const classes = useStyles();
  const response = React.useContext(ApiResponseContext);

  let data = [
    {
      "id": "Contol Score",
      "ranges": [
        40,
        60,
        80,
        90,
        100
      ],
      "measures": [
        response.Control_Overall_Score
      ],
      "markers": []
    }
  ];

    const MyResponsiveBullet = ({ data }) => (
        <Box className={classes.root}>
        <ResponsiveBullet
            data={data}
            margin={{ top: 50, right: 90, bottom: 30, left: 90 }}
            spacing={30}
            titleAlign="start"
            titleOffsetX={-50}
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