import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Divider, Icon } from '@material-ui/core';


import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';

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


const useStyles = makeStyles(theme => ({
  cabecera: {
    height: 60,
    backgroundColor: '#FF9800',
    color: 'white',
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  ContentLogo: {
    border: '1px solid gray',
    padding: 10,

  },
  avSocial: {
    width: 30,
    height: 30,
    [theme.breakpoints.down('sm')]: {
      width: 60,
      height: 60,

    },
    /* '&:hover': {
       width: 35,
       height: 35,
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
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      width: 60,
      height: 60,
    }
  },
}));

export default function UTTarjetaEmpresa() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className="row">
        <div className="col-md-12">
          <CardHeader gutterBottom
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
      <div className="row p-2">
        <div className="col-md-3 " >
          <div className={classes.ContentLogo}>
            <Avatar alt="Logo" src={logoAcce} className={classes.logo} />
          </div>
        </div>
        <div className="col-md-9 text-justify">
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
          <Divider />
        </div>
      </div>
      <div className="row p-2 bg-light">
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

  );
}
