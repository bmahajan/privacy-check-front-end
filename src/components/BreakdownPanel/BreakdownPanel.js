import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Card } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NavigationBar from '../Misc/NavigationBar';
import ControlBreakdownPanel from "./ControlBreakdownPanel/ControlBreakdownPanel";
import GDPRBreakdownPanel from "./GDPRBreakdownPanel/GDPRBreakdownPanel";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    height: theme.panel.height,
    maxHeight: theme.panel.height,
  },
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

export default function BreakdownPanel() {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Card>
        <NavigationBar title={'Score Breakdown'} />
        <AppBar position={'static'} color={'default'}>
          <Tabs value={value} onChange={handleChange} indicatorColor={'secondary'} textColor={'secondary'} variant={'fullWidth'} aria-label={'Score switching'}>
            <Tab label={'Control'} />
            <Tab label={'GDPR'} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <ControlBreakdownPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GDPRBreakdownPanel />
        </TabPanel>
      </Card>
    </div>
  );
}