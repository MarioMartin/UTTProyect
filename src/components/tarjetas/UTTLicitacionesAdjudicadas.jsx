import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from 'material-ui-rating'


import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    bg:{
        //backgroundColor: '#FFE0B2',
        //padding:0,
        borderBottom:'3px solid gray'
    },

}));

export default function UTTLicitacionesAdjudicadas() {
    const classes = useStyles();

    const data = ["1", "2", "3"];
    const tarjetas = data.map((data, i) => {
        //console.log(data.skills);

        return (
            <div className="p-0" className={classes.bg} key={i}>
                <div className="row ">
                    <div className="col-6 col-md-3">
                        <Typography variant="h5" gutterBottom>
                            PYT-5103
                    </Typography>
                    </div>
                    <div className="col-6 col-md-3 text-right text-md-left">
                        <span className="badge badge-success">Finalizada</span>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-right">
                        <Rating value={4} max={5} size="small" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Typography variant="button" display="block" gutterBottom>
                            Implementacion Tablero gestion MUS
                    </Typography>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Typography variant="body2" color="textSecondary" gutterBottom noWrap>
                            <EmailIcon /> eugeniocastillo@bancoestado.cl
                </Typography>
                    </div>
                </div>
                <Divider />
            </div>
        )
    });




    return (
        <div className="container-fluid" >
            {tarjetas}
        </div>
    );
}
