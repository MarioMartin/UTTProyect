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
    avatar: {
        margin: 0,
        width: 20,
        height: 22,
        backgroundColor:'#460073',
        fontSize:12
    },
}));

export default function UTLitleShip(props) {
    const classes = useStyles();


    const seleccionados = props.dataIn.filter((e, i) => {
        return e.tiene === 1;
    })


    const minichips = seleccionados.map((dato, i) => (

        <Chip style={{backgroundColor:'#A100FF'}}
            key={i}
            avatar={
                <Avatar className={classes.avatar}>

                    {dato.level}

                </Avatar>}
            size="small"
            label={dato.Skill}
            color={(dato.tiene) ? "secondary" : "default"}
            className={classes.chip}
        />
    ))


    return (
        <Fragment>
            <div className={classes.root}>
                {minichips}
            </div>
        </Fragment>
    );
}
