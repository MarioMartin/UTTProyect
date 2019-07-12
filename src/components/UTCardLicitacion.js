import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import UTSChip from './UTShip';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
    borderRadius: '1.25rem',
    marginTop: 10,
    //border: '2px solid black',
  },
  cabecera: {
    height: 60,
    backgroundColor: '#a100ff',
    color: 'white',
  },
  footer: {
    backgroundColor: '#efefef',

  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UTCardLicitacion(props) {
  const classes = useStyles();
  //console.log("Lista de skills 1");
  //console.log(props.data.skills);
  /*const ListaSkills = props.data.skills.map((data, i) => (
    <UTSChip key={i} skill={data} />
  ))*/

  /* function handleExpandClick() {
     setExpanded(!expanded);
   }*/

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cabecera}>
        <CardContent>
          <Box display="flex"  >
            <Box flexGrow={1} >
              <Typography gutterBottom variant="h5" component="h2">
                {props.data.SSA}
              </Typography>
            </Box>
            <Box >
              Creada el : 01-01-2019
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>

      <CardContent>
        <Typography variant="button"  >
          <Box fontSize="h6.fontSize" > {props.data.nombre}</Box>
        </Typography>
        <Typography variant="textSecondary" gutterBottom>
          {props.data.descripcion}
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6" color="textPrimary" component="p">
          {}
        </Typography>
      </CardContent>
      <CardContent>


        <Box display="flex"  >
          <Box flexGrow={1} >
            <Typography variant="textSecondary" color="textPrimary" component="p">

            </Typography>
          </Box>
          <Box >
            Fecha Respuesta : 01-01-2019
          </Box>
        </Box>

        <Box display="flex"  >
          <Box flexGrow={1} >
          <UTSChip  data={props.data.skills} />
          </Box>
          <Box >
            <Typography variant="textSecondary" color="textPrimary" component="p">
              Responsable : {props.data.responsable}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions className={classes.footer}>
        <Button size="medium" color="primary">
          <Link to ={{
            pathname:'/consultaLicitacion',
            state:{
              data: props.data
            }
          }}>
            Buscar Candidato
          </Link>
        </Button>
      </CardActions>

    </Card>
  );
}
