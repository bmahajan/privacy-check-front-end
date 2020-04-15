import React from 'react';
import NavigationBar from '../Misc/NavigationBar'
import { Paper, Typography, Card } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    height: theme.panel.height,
    maxHeight: theme.panel.maxHeight,
  },
  about: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  }
}));

export default function AboutPanel(props) {

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Card>
        <NavigationBar title='About'/>
          <Typography className={classes.about}>
            <b>General Disclaimer: </b> 
            <br></br>
            The information contained in the PrivacyCheck Chrome Extension is for informational purposes only and
            is not intended to be used as legal advice for specific legal problems or to replace or substitute the professional advice of a personal privacy specialist or expert.
            This information is estimated and is determined automatically by a computer program.
            Copyright © 2020 The University of Texas at Austin, Center for Identity, All Rights Reserved.
            <p>
            <b>Scoring Algorithm: </b>
            <br></br>
            <b>GDPR - </b>For each question answered with 'Yes/Green', we add 10%. If the question is answered with 'No/Unanswered/Red', we add 0%.
            <br></br>
            <b>Control - </b>For each question answered with 'Good/Green', we add 10%. If the question is answered with 'Okay/Yellow', we add 5%. If the question is answered with 'Bad/Red', we add 0%.
            </p>
            <p>
            <b>Developed by: </b>
            <br></br>
            Alex Issa, Ayush Srivasatava, Isabelle Rogers, Jake Nimergood, Safa Anya, Vinay Shah.
            </p>
          </Typography>
      </Card>
    </div>
  );
}