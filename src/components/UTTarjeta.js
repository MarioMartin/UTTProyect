import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UTListaSkill from './UTListaSkill';

import foto from '.././images/Fabian Aburto.jpg';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 300,
        marginTop: 20,
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function UTTarjeta(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    const tarjetas = props.colaboradores.map((data, i) => {
        const fotoo = data.foto;
        return (
            <div className="col-md-4 sm-12" key={i}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={<Avatar aria-label="Recipe" className={classes.avatar}> R</Avatar>}
                        action={<IconButton aria-label="Settings"> <MoreVertIcon /> </IconButton>}
                        title={data.nombre}
                        subheader={data.contrato}
                    />
                    <CardMedia
                        className={classes.media}
                        //image={foto}
                        //image={data.foto}
                        image={require("../images/"+data.foto+".jpg")}
                        
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {data.descripcion}
                        </Typography>
                        <Divider/>
                        <Typography paragraph>Skills:</Typography>
                        <UTListaSkill skills={data.skills} />
                    </CardContent>
            
                </Card>
            </div>
        )
    });

    return (
        <>
            {tarjetas}
        </>
    );
}
