import React from 'react';
import { Grid, Paper, Typography, Card } from '@material-ui/core';
import NavBar from './NavBar';
import CompetitorCard from './CompetitorCard';
import ScoreBubble from './ScoreBubble';

class CompAnalysisPane extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        // }
    }

    render() {
        return(
            <>
            <NavBar title='Competitor Analysis' />
            
            <Card>
                <Grid container 
                direction='row' 
                alignContent='center'
                justify='center'
                spacing={2}
                >
                    <Grid item>
                        <Typography variant='h3'>
                            Score
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ScoreBubble score='3' height={60} width={60} />
                    </Grid>
                </Grid>
            </Card>

            <Paper elevation={2}>
                <Typography variant='h4' align='center'>
                    Industry Competitor Scores
                </Typography>
                <Grid container 
                alignContent='center' 
                direction='column' 
                justify='center' 
                spacing={1}
                >
                    <Grid item>
                        <CompetitorCard company="Facebook" score="99"></CompetitorCard>
                    </Grid>
                    <Grid item>
                        <CompetitorCard company="Twitter" score="50"></CompetitorCard>
                    </Grid>
                    <Grid item>
                        <CompetitorCard company="TikTok" score="4"></CompetitorCard>
                    </Grid>
                </Grid>
            </Paper>
            </>
           
        );
    }
}

export default CompAnalysisPane;