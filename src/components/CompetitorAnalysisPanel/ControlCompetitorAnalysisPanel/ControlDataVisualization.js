import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ResponsiveBullet } from '@nivo/bullet'
import { CompetitorAnalysisResponseContext, PrivacyPolicyResponseContext } from "../../PanelManager";

const useStyles = makeStyles(theme => ({
  root: {
    height: 125,
  },
}));

export default function ControlDataVisualization(props) {

  const catResponse = React.useContext(CompetitorAnalysisResponseContext);
  const response = React.useContext(PrivacyPolicyResponseContext);
  const classes = useStyles();

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
          data={controlData}
          margin={{ top: 10, right: 90, bottom: 30, left: 90 }}
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

  return MyResponsiveBullet({ controlData});
}
