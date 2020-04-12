import React from 'react';
import NavigationBar from '../Misc/NavigationBar'
import { Paper, Typography, Card } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.sizing.width,
    height: theme.sizing.maxHeight,
  },
}));

export default function AboutPanel(props) {

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Card>
        <NavigationBar title='About' color="orange" />
        <Paper>
          <Typography variant='h6' align='center'>
            General disclaimer: The information contained in the PrivacyCheck Chrome Extension is for informational purposes only and
            is not intended to be used as legal advice for specific legal problems or to replace or substitute the professional advice of a personal privacy specialist or expert.
            This information is estimated and is determined automatically by a computer program.
            Copyright © 2015 The University of Texas at Austin, Center for Identity, All Rights Reserved.
          </Typography>
        </Paper>
      </Card>
    </div>
  );
}