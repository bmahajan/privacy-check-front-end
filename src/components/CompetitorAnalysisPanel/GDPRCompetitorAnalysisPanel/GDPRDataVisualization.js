import React from 'react'
import { Box } from '@material-ui/core'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import { ResponsiveBullet } from '@nivo/bullet'
import { CompetitorAnalysisResponseContext, PrivacyPolicyResponseContext } from "../../PanelManager";
import lightTheme from '../../Themes/lightTheme';

const useStyles = makeStyles(theme => ({
  root: {
    height: 125,
    marginTop: -25
  },
}));

export default function GDPRDataVisualization(props) {
  const catResponse = React.useContext(CompetitorAnalysisResponseContext);
  const response = React.useContext(PrivacyPolicyResponseContext);
  const classes = useStyles();
  const currentTheme = localStorage.getItem('theme');

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
    <ThemeProvider theme={lightTheme}>
    <Box className={classes.root}>
      <ResponsiveBullet
        data={gdprData}
        margin={{ top: 50, right: 90, bottom: 30, left: 90 }}
        spacing={50}
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
        rangeColors="red_yellow_green"
        measureColors="yellow_green"
        markerColors="yellow_green"
        animate={true}
        motionStiffness={90}
        motionDamping={12}
      />
    </Box>
    </ThemeProvider>
  );

  return MyResponsiveBullet({ gdprData });
}
