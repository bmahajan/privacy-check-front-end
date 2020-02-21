import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Divided from './divided'
import { Switch } from "@material-ui/core";

const Demo = ({ classes, onToggleDark }) => (
  <Card>
    <CardContent>
        <Divided onPoop={onToggleDark}/>
    </CardContent>
  </Card>
);

export default Demo;
