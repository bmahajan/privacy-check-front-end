import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import RemoveIcon from '@material-ui/icons/Remove';
import { withStyles, makeStyles } from '@material-ui/core/styles';



// if(score == 2)
//     check
// else if(score ==1)
//     cross
// else 
//     indetermined


export default function statusIcon(props) {


    console.log('Reached Function' + props.score);

    if (props.score == 2){
        return(
        <CheckIcon style={{color: "green"}}/>
    );
    }
    else if (props.score == 1){
        return(
        <ClearIcon style={{color: "red"}}/>
        );
    }
    else{
        return(
        <RemoveIcon  style={{color: "yellow"}}/>
        );
    }
}