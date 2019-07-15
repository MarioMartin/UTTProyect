import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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

    //console.log(props.data);

    const minichips = props.dataIn.sort((a, b) => a.tiene - b.tiene).map((dato, i) => (
        <Chip
            key={i}
            size="small"
            label={dato.nombre}
            color={(dato.tiene) ? "secondary" : "default"}
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
