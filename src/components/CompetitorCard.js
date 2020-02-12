import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

class CompetitorCard extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Grid container alignItems='flex-start'>
                <Grid item>
                    <Card>
                        <CardContent >
                            <Typography variant='h8'>
                                <p>{this.props.company}   
                                <TrendingFlatIcon />
                                {this.props.score}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        )
    }
}

export default CompetitorCard;
