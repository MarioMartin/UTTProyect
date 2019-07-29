import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Hidden from '@material-ui/core/Hidden';
import { fade } from '@material-ui/core/styles/colorManipulator';

import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';




const useStyles = makeStyles(theme => ({

    titulo1: {
        paddingTop: 100,
        color: 'white',
        marginBottom: 0,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 50,
            fontSize: 50,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 60,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 100,
        },
    },
    titulo2: {
        color: '#d500f9',
        paddingBottom: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: 50,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 60,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 100,
        },

    },
    card: {
        maxWidth: '20vw',
        marginTop: 40,
        backgroundColor: 'transparent',

    },
    media: {
        height: 10,
        paddingTop: '100%', // 16:9
    },
    header: {
        backgroundColor: 'black',
        opacity: 100,
        color: 'white',
    },
    tituloCard: {
        color: '#d500f9',
    },
}));

export default function Home() {
    const classes = useStyles();

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 sm-12 text-center " >
                    <div className="row">
                        <div className="col-md-12 text-center " >
                            <h1 className={classes.titulo1}>ULTIMATE</h1>
                            <h2 className={classes.titulo2}>TEAM</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 sm-12 text-center " >
                    <Hidden smDown>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={require("../images/flechaAzul.png")}
                                title="logo"
                            />
                        </Card>
                    </Hidden>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: fade('#eeeeee', 0.5), }}>
                <div className="col-md-4 sm-12 p-4 text-center " >
                    <div className="card" style={{ width: '18rem', }}>
                        <img src={require("../images/people.jpg")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <Typography variant="h5" className={classes.tituloCard} gutterBottom>
                                Traza tu camino
                            </Typography>
                            <Divider />
                            <Typography variant="body1" gutterBottom>
                                Te ayudaremos a encontrar el camino correcto para tu carrera a través de nuestra amplia gama de oportunidades. Tendrás la oportunidad de trabajar en una amplia gama de industrias con algunas de las organizaciones más influyentes del mundo.
                            </Typography>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 sm-12 p-4 text-center " >
                    <div className="card" style={{ width: '18rem', }}>
                        <img src={require("../images/people2.jpg")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <Typography variant="h5" className={classes.tituloCard} gutterBottom>
                                Haz la diferencia a tu manera
                            </Typography>
                            <Divider />
                            <Typography variant="body1" gutterBottom>
                                Trabaja en un lugar donde te sientas inspirado a explorar tus pasiones; donde nutras y cultives tus talentos; donde puedas innovar con tecnología de vanguardia en los proyectos más increíbles que puedas imaginar.
                            </Typography>


                        </div>
                    </div>
                </div>
                <div className="col-md-4 sm-12 p-4 text-center " >
                    <div className="card" style={{ width: '18rem', }}>
                        <img src={require("../images/people3.jpg")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <Typography variant="h5" className={classes.tituloCard} gutterBottom>
                                Ayúdanos a cambiar el mundo
                            </Typography>
                            <Divider />
                            <Typography variant="body1" gutterBottom>
                                Tendrás a tu disposición las herramientas que necesites para seguir creciendo y liderando el cambio en el mundo.
                            </Typography>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}