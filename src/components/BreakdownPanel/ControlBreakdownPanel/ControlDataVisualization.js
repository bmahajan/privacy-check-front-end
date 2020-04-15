import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
<<<<<<< HEAD
import { ApiResponseContext} from "../../PanelManager";
=======
// import data from '../../../data/controlData.json'
>>>>>>> ed1f46ce1518a053ca2dfd0ced474a0c1125524e
import { ResponsiveBullet } from '@nivo/bullet'
import { CATResponseContext, ApiResponseContext } from "../../PanelManager";


const useStyles = makeStyles(theme => ({
  root: {
    height: 125,
  },
}));

export default function ControlDataVisualization(props) {

  const catResponse = React.useContext(CATResponseContext);
  const response = React.useContext(ApiResponseContext);
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

  const controlData = [
    {
      "id": "Control",
      "ranges": [
        40,
        60,
        80,
        90,
        100
      ],
      "measures": [response.Control_Overall_Score],
      "markers": [catResponse.control_mean]
    }
  ]

  const MyResponsiveBullet = ({ controlData }) => (
        <Box className={classes.root}>
        <ResponsiveBullet
<<<<<<< HEAD
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
=======
          data={controlData}
          margin={{ top: 50, right: 90, bottom: 30, left: 90 }}
          spacing={50}
          titleAlign="start"
          titleOffsetX={-70}
          measureSize={0.2}
          rangeColors="red_yellow_green"
          animate={true}
          motionStiffness={90}
          motionDamping={12}
>>>>>>> ed1f46ce1518a053ca2dfd0ced474a0c1125524e
        />
        </Box>
    )

<<<<<<< HEAD
    return MyResponsiveBullet({data});
}
=======
  return MyResponsiveBullet({ controlData});
}
>>>>>>> ed1f46ce1518a053ca2dfd0ced474a0c1125524e
