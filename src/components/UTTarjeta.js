import React, { Fragment } from 'react';
import clsx from 'clsx';
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
import UbicacionIcon from '@material-ui/icons/WhereToVote';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';
import { Divider } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import UTSLitleShipTarjeta from './UTSLitleShipTarjeta';
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActions from '@material-ui/core/CardActions';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
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
        //console.log(data.skills);

       

        return (
            <div className="col-md-5 sm-12" key={i}>
                <Card className={classes.card}>

                    <div className="row">
                        <div className="col-md-12">
                            <CardHeader style={{ backgroundColor: '#6a1b9a', color: 'white', }}
                                avatar={<Avatar aria-label="Recipe" className={classes.avatar}> R</Avatar>}
                                action={<IconButton aria-label="Settings"> <MoreVertIcon /> </IconButton>}
                                title={data.nombre}
                                subheader={<strong style={{ color: 'white', }}>{data.contrato}</strong>}
                            />
                            <Divider />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 sm-12  ">
                            <CardMedia
                                className={classes.media}
                                image={require("../images/" + data.foto + ".jpg")}
                                title="Paella dish"
                            />
                            <Divider />
                        </div>
                        <div className="col-md-7 sm-12   ">
                            <CardContent >
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.descripcion}
                                </Typography>
                            </CardContent>

                        </div>

                    </div>
                    <Divider />
                    <CardContent >
                        <Typography variant="body2" color="textSecondary" component="p">
                            <WorkIcon /> {data.careerLevel} - <UbicacionIcon /> {data.ubicacion}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <EmailIcon />
                            <Link component="button" variant="body2">
                                {data.mail}
                            </Link>
                        </Typography>
                        <Divider />
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Skills:</Typography>
                            <UTSLitleShipTarjeta dataIn={data.skills}  />
                        </CardContent>
                    </Collapse>


                </Card>
            </div>
        )
    });

    return (
        <Fragment>
            {tarjetas}
        </Fragment>
    );
}
