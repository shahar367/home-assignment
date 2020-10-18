import React, { useEffect } from 'react';
import { Button, Container, makeStyles, Paper } from '@material-ui/core';
import MissionCard from '../components/mission-card';

// import Animations from '../css/animation.module.css';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        paddingRight: 0
    },
    missionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2.5em auto',
        alignContent: 'flex-start',
        flexWrap: 'wrap'
    },
    showAllContainer: {
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    }
});

let Main = ({ missions, handleShowAllMissions, handleFetchUserMissions }) => {

    const classes = useStyles();

    useEffect(() => {
        handleFetchUserMissions();
    }, [])

    return (
        <Container className={classes.container}>
            <Container className={classes.missionContainer}>
                {missions.map((mission, i) => {
                    const fixedImagePath = mission.MissionImagePath.replace(/\\/g,'/');
                    console.log(fixedImagePath);
                        return(
                            <MissionCard key={`${mission.MissionTitle}-${i}`} title={mission.MissionTitle} image={fixedImagePath} />
                        )
                })}
            </Container>
            <Paper elevation={0} className={classes.showAllContainer}>
                <Button variant='contained' color='primary' onClick={handleShowAllMissions}>Show All Missions</Button>
            </Paper>
        </Container>
    )
}

export default Main;