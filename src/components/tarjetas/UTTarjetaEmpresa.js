import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UbicacionIcon from '@material-ui/icons/WhereToVote';
import WorkIcon from '@material-ui/icons/Work';
import WebIcon from '@material-ui/icons/NearMe';

import logoAcce from '../../images/logos/logo-Accenture.png';

import logoFace from '../../images/logos/social/icons8-facebook.png';
import logoInta from '../../images/logos/social/icons8-instagram.png';
import logoLink from '../../images/logos/social/icons8-linkedin.png';
import logoYout from '../../images/logos/social/icons8-youtube.png';

import boss1 from '../../images/ayben.cardenas.jpg';
import boss2 from '../../images/agustin.alcaide.jpg';

import Rating from 'material-ui-rating' 

import DespliegueEmpresa from './UTDespliegueEmpresa';


const useStyles = makeStyles(theme => ({
  card:{
    marginBottom:20,
  },
  cabecera: {
    height: 60,
    backgroundColor: '#FF9800',
    color: 'white',
    
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
  avSocial: {
    width: 30,
    height: 30,
    [theme.breakpoints.down('sm')]: {
      width: 50,
      height: 50,
    },
    /* '&:hover': {
       width: 55,
       height: 55,
     },*/

  },
  AvatarBoss: {
    margin: 5,
    width: 80,
    height: 80,
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      width: 100,
      height: 100,
    }
  },
  grid: {
    [theme.breakpoints.down('sm')]: {
      Justify: "center",
      justifyContent: "center",
    }
  },
  fab: {
    width: 30,
    height: 30,
    borderRadius: 2,
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      width: 50,
      height: 50,
    }
  },

}));

export default function UTTarjetaEmpresa(props) {
  const classes = useStyles();


  const tarjetas = props.data.map((data, i) => {
    //console.log(data.skills);

    return (
      <Card className={classes.card} key={i}>
        <div className="row">
          <div className="col-md-12">
            <CardHeader
              className={classes.cabecera}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="ACCENTURE CHILE"
              subheader="Empresa Multinacional" />
          </div>
        </div>
        <div className="row p-2 pl-3 pr-3">
          <div className="col-3 col-md-3" >
            <Avatar alt="Logo" src={logoAcce} className={classes.logo} />
          </div>
          <div className="col-9 d-md-none" >
            <Rating value={4} max={5} />
          </div>
          <div className="col-12 col-md-9 pt-4 pt-md-0 text-justify"   >
            <Typography variant="body2" color="textPrimary" component="p" justify='center'>
              Accenture soluciona los retos más difíciles de nuestros clientes al
              proveer servicios en estrategia, consultoría, transformación digital,
              tecnología y operaciones. Nos asociamos con más de tres cuartas
              partes de las compañías Fortune Global 500, impulsando la
              innovación para mejorar la forma en que el mundo funciona y vive.
              Con experiencia en más de 40 industrias y en todas las funciones de
              negocio, ofrecemos resultados transformacionales para un exigente
              nuevo mundo digital.
          </Typography>
          </div>
        </div>
        <div className="row p-2 pl-3 pr-3 border-top-1 border border-secondary bg-light bt-1">
          <div className="col-md-8 sm-12">
            <Typography variant="body2" color="textSecondary" gutterBottom noWrap>
              <WorkIcon /> Accenture Chile, asesorias Y servicios limitada.
          </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom noWrap>
              <UbicacionIcon /> Apoquinto #5550, torre A, piso 14, Las Condes, Santiago, CHILE.
          </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom noWrap>
              < WebIcon /><Link href="https://www.accenture.com/cl-es"> Accenture Page</Link>
            </Typography>

          </div>
          <div className="col-md-4 sm-12 text-sm-center">
            <Grid container className={classes.grid}>
              <Avatar src={boss1} className={classes.AvatarBoss} />
              <Avatar src={boss2} className={classes.AvatarBoss} />
            </Grid>
          </div>
        </div>
        
        <div>
          <DespliegueEmpresa />
        </div>
            
        <div className="row p-2 bg-dark ">
          <div className="col-md-3 sm-12 ">
            <Grid container className={classes.grid}>
              <Fab className={classes.fab}>
                <Avatar src={logoFace} className={classes.avSocial} />
              </Fab>
              <Fab className={classes.fab}>
                <Avatar src={logoInta} className={classes.avSocial} />
              </Fab>
              <Fab className={classes.fab}>
                <Avatar src={logoLink} className={classes.avSocial} />
              </Fab>
              <Fab className={classes.fab}>
                <Avatar src={logoYout} className={classes.avSocial} />
              </Fab>
            </Grid>
          </div>
          <Hidden smDown>
            <div className="col-md-9 sm-12 text-right justify-content-md-center" >
              <Rating value={4} max={5} />
            </div>
          </Hidden>
        </div>
      </Card>
    )
  });




  return (
    <Fragment>
      { tarjetas }
    </Fragment>

  );
}
