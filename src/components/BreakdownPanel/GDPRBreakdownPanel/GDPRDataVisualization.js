import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ResponsiveBullet } from '@nivo/bullet'
import { CATResponseContext, ApiResponseContext } from "../../PanelManager";


const useStyles = makeStyles(theme => ({
  root: {
    height: 125,
  },
}));

export default function GDPRDataVisualization(props) {
  const catResponse = React.useContext(CATResponseContext);
  const response = React.useContext(ApiResponseContext);
  const classes = useStyles();
  const response = React.useContext(ApiResponseContext);

  let data = [
    {
      "id": "GDPR Score",
      "ranges": [
        40,
        60,
        80,
        90,
        100
      ],
      "measures": [
        response.GDPR_Overall_Score
      ],
      "markers": []
    }
  ];

  const gdprData = [
    {
      "id": "GDPR",
      "ranges": [
        40,
        60,
        80,
        90,
        100
      ],
      "measures": [response.GDPR_Overall_Score],
      "markers": [catResponse.gdpr_mean]
    }
  ]

  const MyResponsiveBullet = ({ gdprData }) => (
        <Box className={classes.root}>
        <ResponsiveBullet
          data={gdprData}
          margin={{ top: 50, right: 90, bottom: 30, left: 90 }}
          spacing={50}
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

  return MyResponsiveBullet({ gdprData });
}
