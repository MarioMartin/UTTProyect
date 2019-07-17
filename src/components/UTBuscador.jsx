import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import RestoreIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 500
   //width: 600,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

export default function UTBuscador({getBusqueda, getLimpiar}) {
  const classes = useStyles();
  const [valor, setValor] = React.useState();

  function hadleInput(e) {
    setValor(e.target.value);
  }

  function buscar(e) {
    getBusqueda(valor);
  }

  function limpiar(){
    
    getLimpiar();
  }

  return (
    <Paper className={classes.root}>

      <InputBase
        className={classes.input}
        placeholder="Buscar Skill"
        inputProps={{ 'aria-label': 'Buscar Skill' }}
        onChange={hadleInput}
      />
      <IconButton className={classes.iconButton} aria-label="Buscar" onClick={buscar} >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton color="primary" className={classes.iconButton} aria-label="Limpiar" onClick={limpiar}>
        <RestoreIcon />
      </IconButton>
    </Paper>
  );
}
