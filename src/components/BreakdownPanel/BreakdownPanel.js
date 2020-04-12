import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Card } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NavigationBar from '../Misc/NavigationBar';
import ControlScoreBreakdown from "./ControlComponenets/ControlScoreBreakdown";
import GDPRScoreBreakdown from "./GDPRComponenets/GDPRScoreBreakdown";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.maxHeight,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      <Typography>
        {value === index && <Box p={2}>{children}</Box>}
      </Typography>
    </div>
  );
}

// This is just specifying the types of the props that the tab panel can accept.
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function BreakdownPanel() {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <Card>
        <NavigationBar title={'Score Breakdown'} color={'orange'} />
        <AppBar position={'static'} color={'default'}>
          <Tabs value={value} onChange={handleChange} indicatorColor={'primary'} textColor={'primary'} variant={'fullWidth'} aria-label={'Score switching'}>
            <Tab label={'Control Breakdown'} />
            <Tab label={'GDPR Breakdown'} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <ControlScoreBreakdown />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GDPRScoreBreakdown />
        </TabPanel>
      </Card>
    </div>
  );
}