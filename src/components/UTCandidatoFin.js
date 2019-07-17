import React, { useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import UTLitleShip from './UTSLitleShip';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UTCandidatoFin({data}) {
  const classes = useStyles();
  const [candidatos, setCandidatos] = React.useState(data);

  
  candidatos.splice(0,1)
 

  useEffect(() => {


  })

  const ListaCandidatos = candidatos.map((data, i) => {
    return (
      <ListItem key={i} button>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${1}`}
            src={data.foto}
          />
        </ListItemAvatar>

        <ListItemText
          primary={data.nombre}
          secondary={
            <Fragment>
              {data.contrato}
            </Fragment>
          }
        />
        <UTLitleShip dataIn={data.skills} />

        <Divider variant="middle" />
      </ListItem>
    )
  })

  return (
    <List dense className={classes.root}>
      {ListaCandidatos}
    </List>
  );
}