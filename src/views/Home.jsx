import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Hidden from '@material-ui/core/Hidden';
import { fade } from '@material-ui/core/styles/colorManipulator';




const useStyles = makeStyles(theme => ({
    root: {

    },
    titulo1: {
        //margin: theme.spacing(1),
        paddingTop: 100,
        fontSize: '6vw',
        //fontWeight: 'fontWeightBold',
        //fontFamily: 'Arial Black',
        color: 'white',

    },
    titulo2: {
        fontSize: '6vw',
        //fontWeight: 'fontWeightBold',
        //fontFamily: 'Arial Black',
        color: '#d500f9',
        paddingBottom: 20,
    },
    titulo1B: {
        //margin: theme.spacing(1),
        paddingTop: 100,
        fontSize: '12vw',
       // fontWeight: 'fontWeightBold',
        //fontFamily: 'Arial Black',
        color: 'white',

    },
    titulo2B: {
        fontSize: '12vw',
        ///fontWeight: 'fontWeightBold',
        //fontFamily:'Arial Black',
        color: '#d500f9',
        paddingBottom: 20,
    },
    titulo3: {
        color: '#eeeeee',
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
}));

export default function Home() {
    const classes = useStyles();

    return (


        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 sm-12 text-center " >
                    <div className="row">
                        <div className="col-md-12 text-center " >
                            <Hidden smDown>
                                <h1 className="font-weight-bold" className={classes.titulo1}>ULTIMATE</h1>
                            </Hidden>
                            <Hidden only="lg">
                                <h1 className="font-weight-bold" className={classes.titulo1B}>ULTIMATE</h1>
                            </Hidden>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 sm-12 text-center " >
                            <Hidden smDown>
                                <h2 className="font-weight-bold" className={classes.titulo2}>TEAM</h2>
                            </Hidden>
                            <Hidden only="lg">
                                <h2 className="font-weight-bold" className={classes.titulo2B}>TEAM</h2>
                            </Hidden>
                        </div>
                        <div className="col-md-6 sm-12 text-center" >

                            <Hidden smDown>
                                <Typography variant="h1" className={classes.titulo3}> </Typography>
                            </Hidden>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 sm-12 text-center " >
                    <Hidden smDown>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={require("../images/flechaAzul.png")}
                                title="Paella dish"
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
                            <h5 className="card-title">Traza tu camino</h5>
                            <p className="card-text"> Te ayudaremos a encontrar el camino correcto para tu carrera a través de nuestra amplia gama de oportunidades. Tendrás la oportunidad de trabajar en una amplia gama de industrias con algunas de las organizaciones más influyentes del mundo.</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 sm-12 p-4 text-center " >
                    <div className="card" style={{ width: '18rem', }}>
                        <img src={require("../images/people2.jpg")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Haz la diferencia a tu manera</h5>
                            <p className="card-text">Trabaja en un lugar donde te sientas inspirado a explorar tus pasiones; donde nutras y cultives tus talentos; donde puedas innovar con tecnología de vanguardia en los proyectos más increíbles que puedas imaginar.</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 sm-12 p-4 text-center " >
                    <div className="card" style={{ width: '18rem', }}>
                        <img src={require("../images/people3.jpg")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ayúdanos a cambiar el mundo  </h5>
                            <p className="card-text">Tendrás a tu disposición las herramientas que necesites para seguir creciendo y liderando el cambio en el mundo.</p>
           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}