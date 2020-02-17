import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Switches from "./Switch";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Divided from './divided.js'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
});

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});


export default function SimpleCard () {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
  return (
    <ThemeProvider theme={theme}>
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2"  >
            <Divided />
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </ThemeProvider>

  );
}
