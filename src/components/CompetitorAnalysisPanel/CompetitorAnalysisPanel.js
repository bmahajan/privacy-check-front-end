import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tab, Tabs, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import NavigationBar from "../Misc/NavigationBar";
import ControlCompetitorAnalysisPanel from "./ControlCompetitorAnalysisPanel/ControlCompetitorAnalysisPanel";
import GDPRCompetitorAnalysisPanel from "./GDPRCompetitorAnalysisPanel/GDPRCompetitorAnalysisPanel";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    height: theme.panel.height,
  },
  disclaimer: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div>
      <Typography component={'span'}>
        {value === index && <Box>{children}</Box>}
      </Typography>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function CompetitorAnalysisPanel(props) {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <NavigationBar title={'Competitor Analysis'} />
      <AppBar position={'static'} color={'default'}>
        <Tabs value={value} onChange={handleChange} indicatorColor={'secondary'} textColor={'secondary'} variant={'fullWidth'} aria-label={'Standard switching'}>
          <Tab label={'User Control'} />
          <Tab label={'GDPR'} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ControlCompetitorAnalysisPanel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GDPRCompetitorAnalysisPanel />
      </TabPanel>
      <Card>
        <Typography className={classes.disclaimer} variant="body2" align="justify">
            <b>Disclaimer: </b> Some of the top competitors displayed might not make sense right now. 
            This is because we are still adding many companies to our database so that we can train our models to provide you with the most reliable information we can.
        </Typography>
      </Card>
    </Card>
  );
}