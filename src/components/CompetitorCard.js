import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

class CompetitorCard extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card>
                <Grid container alignItems='center'>
                    <Grid item>
                        <CardContent >
                            <Typography variant='h6' align='center'>
                                <p>{this.props.company} -> {this.props.score}</p>
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default CompetitorCard;
