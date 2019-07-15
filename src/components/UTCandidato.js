import React, { useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { colaboradores } from '../colaboradores.json';
import UTLitleShip from './UTSLitleShip';
//import React, { useEffect } from 'react'

import foto from '.././images/perfil.jfif';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UTCandidato(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const [candidatos, setCandidatos] = React.useState(colaboradores);


  useEffect(() => {
    //setCandidatos()

  })

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const skillsLicitacion = props.data;
  //const skillsLicitacion = ["Angular", "SQL"];

  candidatos.forEach(function (candidato) {
    let skills = candidato.skills;
    let infoSk = [];
    let count = 0;

    for (let i = 0; i < skills.length; i++) {
      let skill = skills[i];

      if (skillsLicitacion.includes(skill)) {
        count++;
        infoSk.push({ nombre: skill, tiene: 1 });

      } else {
        infoSk.push({ nombre: skill, tiene: 0 });
      }
    }
    candidato.coincidencias = count;
    candidato.infoSk = infoSk;

  });


  const ListaCandidatos = candidatos.sort((a, b) => a.coincidencias - b.coincidencias).map((data, i) => {
    return (
      <ListItem key={i} button>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${1}`}
            src={foto}
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
         <UTLitleShip dataIn={data.infoSk} />

        <Divider variant="middle" />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={handleToggle(data)}
            checked={checked.indexOf(data) !== -1}
          //inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    )
  }).reverse()

  return (
    <List dense className={classes.root}>
      {ListaCandidatos}
    </List>
  );
}