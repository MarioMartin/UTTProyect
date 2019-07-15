import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing(0),
    },
}));

export default function UTLitleShip(props) {
    const classes = useStyles();

    console.log(props.dataIn);

    const minichips = props.dataIn.map((dato, i) => (
        <Chip
            key={i}
            size="small"
            avatar={<Avatar>{dato.level}</Avatar>}
            label={dato.skill}
            color={(dato.tiene) ? "secondary" : "secondary"}
            className={classes.chip}
        />
    )).reverse()


    return (
        <Fragment>
            <div className={classes.root}>
                {minichips}
            </div>
        </Fragment>
    );
}
