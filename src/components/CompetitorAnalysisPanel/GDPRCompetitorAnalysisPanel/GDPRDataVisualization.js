import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { ResponsiveBullet } from '@nivo/bullet'
import { CompetitorAnalysisResponseContext, PrivacyPolicyResponseContext } from "../../PanelManager";
import nivo_darkTheme from '../../Themes/nivo_darkTheme'
import nivo_lightTheme from '../../Themes/nivo_lightTheme'

const useStyles = makeStyles(theme => ({
  root: {
    height: 125,
    marginTop: -25
  },
}));

export default function GDPRDataVisualization(props) {

  const colorTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    switch (currentTheme) {
      case 'light':
        return nivo_lightTheme;
      case 'dark':
        return nivo_darkTheme;
      default:
        return nivo_lightTheme;
    }
  };

  const catResponse = React.useContext(CompetitorAnalysisResponseContext);
  const response = React.useContext(PrivacyPolicyResponseContext);
  const classes = useStyles();

  const gdprData = [
    {
      "id": "GDPR",
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
      "measures": [response.GDPR_Overall_Score],
      "markers": [catResponse.gdpr_mean]
    }
  ]

  const MyResponsiveBullet = ({ gdprData }) => (
    <Box className={classes.root}>
      <ResponsiveBullet
        data={gdprData}
        theme={colorTheme}
        margin={{ top: 50, right: 90, bottom: 30, left: 90 }}
        spacing={50}
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
  );

  return MyResponsiveBullet({ gdprData });
}
