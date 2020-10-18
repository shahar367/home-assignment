import { Box, Card, CardHeader, CardMedia, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    card: {
        flex: '0 1 calc(50% - 10px)',
        margin: '10px 0px',
        '&:nth-of-type(even)': {
            marginLeft: 10,
            marginRight: 0,
        }
    },
    cardHeaderRoot: {
        padding: 0,
        paddingRight: 16
    },
    cardHeaderTitle: {
        fontSize: 20
    },
    imageConatiner: {
        width: 56,
        height: 55,
        borderRight: '1px solid #f44336'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

let MissionCard = ({ title, image }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader classes={{ root: classes.cardHeaderRoot, title: classes.cardHeaderTitle }} title={title}
                avatar={
                    <Box component='div' className={classes.imageConatiner}>
                        <CardMedia className={classes.image} image={image} />
                    </Box>
                }>
            </CardHeader >
        </Card >
    )
}

export default MissionCard;