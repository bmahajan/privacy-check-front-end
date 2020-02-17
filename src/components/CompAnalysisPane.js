import React from 'react';
import { Grid, Paper, Typography, CardContent, Card } from '@material-ui/core';
import NavBar from './NavBar';
import CompetitorCard from './CompetitorCard';
import ScoreDisplay from './ScoreDisplay';

class CompAnalysisPane extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        // }
    }

    render() {
        return(
            <>
            <NavBar name='Competitor Analysis'/>
            
            <Card>
                <CardContent>
                    <ScoreDisplay />
                </CardContent>
            </Card>


            <Paper elevation={2}>
                <Typography variant='h4' align='center'>
                    Industry Competitor Scores
                </Typography>
                <Grid container alignContent='center' direction='column' justify='center' spacing={1}>
                    <Grid item>
                        <CompetitorCard company="Facebook" score="11%"></CompetitorCard>
                    </Grid>
                    <Grid item>
                        <CompetitorCard company="Twitter" score="50%"></CompetitorCard>
                    </Grid>
                    <Grid item>
                        <CompetitorCard company="TikTok" score="40%"></CompetitorCard>
                    </Grid>
                </Grid>
            </Paper>
            </>
           
        );
    }
}

export default CompAnalysisPane;