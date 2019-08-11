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
import ReactStars from 'react-stars'

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
    bg: {
        //backgroundColor: '#FFE0B2',
        //padding:0,
        borderBottom: '3px solid gray'
    },

}));

export default function UTTLicitacionesAdjudicadas(props) {
    const classes = useStyles();
    const [licitaciones, setLicitaciones] = React.useState(props.data);

    const tarjetas = licitaciones.map((data, i) => {
        //console.log(data.skills);

        return (
            <div className="p-0" className={classes.bg} key={i}>
                <div className="row ">
                    <div className="col-6 col-md-3">
                        <Typography variant="h5" >
                            {data.iniciativa}
                        </Typography>
                    </div>
                    <div className="col-6 col-md-3 text-right text-md-left">
                        <span className="badge badge-success">{data.estado}</span>
                    </div>
                    <div className="col-12 col-md-6 text-right text-md-right mt-0 pt-0 ">
                        <ReactStars value={data.calificacion} count={5} size={30} edit={false} color2={'#FF9800'} className="d-none d-md-block text-right"/>
                        <ReactStars value={data.calificacion} count={5} size={15} edit={false} color2={'#FF9800'} className="d-md-none d-lg-none text-right" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Typography variant="button" display="block" gutterBottom>
                            {data.descripcion}
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
