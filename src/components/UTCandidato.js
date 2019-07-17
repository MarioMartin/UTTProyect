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
import Typography from '@material-ui/core/Typography';
import UTModal from './UTModal';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UTCandidato({ data, metodo }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const [candidatos, setCandidatos] = React.useState(colaboradores);
  const [seleccionado, setSeleccionado] = React.useState();

  //console.log(data);

  useEffect(() => {


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
    metodo(newChecked)

  };

  

  function UTFiltrar(candidatos) {

    const skillsLicitacion = data;
    const candidatosConSkill = [];


    candidatos.forEach(function (candidato) {
      let skills = candidato.skills;
      let count = 0;

      for (let i = 0; i < skills.length; i++) {
        let skill = skills[i].Skill;

        if (skillsLicitacion.includes(skill)) {
          count++;
          candidato.skills[i].tiene = 1
        } else {
          candidato.skills[i].tiene = 0
        }
      }
      if (count > 0) {
        candidato.coincidencias = count;
        candidatosConSkill.push(candidato);
      }
    });
    return candidatosConSkill
  }

  function handleClick ()  {
    alert();
 
 
   };

  const ListaCandidatos = UTFiltrar(candidatos).sort((a, b) => a.coincidencias - b.coincidencias).map((data, i) => {
    return (
      <div key={i}>
        <ListItem button onClick={handleClick}>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°${1}`}
              src={require("../images/" + data.foto + ".jpg")}
            />
          </ListItemAvatar>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ListItemText
                  primary={
                    <Typography variant="button" display="block" gutterBottom>
                      {data.nombre}
                    </Typography>
                  }
                  secondary={
                    <Fragment>
                      {data.contrato}
                    </Fragment>
                  }
                />
              </div>

            </div>
            <div className="row">
              <div className="col-md-12">
                <UTLitleShip dataIn={data.skills} />
              </div>
            </div>
          </div>




          <Divider variant="middle" />
          <ListItemSecondaryAction>
            <Checkbox
              color="primary"
              edge="end"
              onChange={handleToggle(data)}
              checked={checked.indexOf(data) !== -1}
            />
          </ListItemSecondaryAction>

        </ListItem>
        <Divider />
        <Modal open={false}>
       
        </Modal>
      </div>

    )
  }).reverse()

  return (
    <List dense className={classes.root}>
      {ListaCandidatos}
    </List>
  );
}