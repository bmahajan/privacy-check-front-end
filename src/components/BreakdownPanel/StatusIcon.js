import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import RemoveIcon from '@material-ui/icons/Remove';
import { withStyles, makeStyles } from '@material-ui/core/styles';


export default function StatusIcon(props) {

    if (props.score == 2){
        return(
        <CheckIcon style={{color: "green", fontSize: 30, align: 'center'}}/>
    );
    }
    else if (props.score == 1){
        return(
        <ClearIcon style={{color: "red", fontSize: 30, align: 'center'}}/>
        );
    }
    else{
        return(
        <RemoveIcon  style={{color: "grey", fontSize: 30}}/>
        );
    }
}