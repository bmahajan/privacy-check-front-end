import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ResponsiveBullet } from '@nivo/bullet'
import { CompetitorAnalysisResponseContext, PrivacyPolicyResponseContext } from "../../PanelManager";
import nivo_darkTheme from '../../Themes/nivo_darkTheme'
import nivo_lightTheme from '../../Themes/nivo_lightTheme'

const useStyles = makeStyles(theme => ({
  root: {
    height: 125,
    marginTop: -25,
  },
}));

export default function ControlDataVisualization(props) {

  const [colorTheme, setColorTheme] = React.useState(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
      return nivo_lightTheme;
    } else if (currentTheme === 'dark') {
      return nivo_darkTheme;
    } else {
      return nivo_lightTheme;
    }
  });

  const catResponse = React.useContext(CompetitorAnalysisResponseContext);
  const response = React.useContext(PrivacyPolicyResponseContext);
  const classes = useStyles();

  const controlData = [
    {
      "id": "User Control",
      "ranges": [
        10,
        20,
        30,
        40,
        50,
        60,
        70,
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
            theme={colorTheme}
            data={controlData}
            margin={{ top: 50, right: 90, bottom: 30, left: 90 }}
            spacing={15}
            titleAlign="start"
            titleOffsetX={-70}
            measureSize={0.2}
            rangeColors="red_yellow_green"
            measureColors="pastel1"
            markerColors="red_blue"
            animate={true}
            motionStiffness={90}
            motionDamping={12}
          />

        </Box>
    )

  return MyResponsiveBullet({ controlData});
}
