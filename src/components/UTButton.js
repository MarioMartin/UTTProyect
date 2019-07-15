import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1), 
    backgroundColor: 'black',
  },
  input: {
    display: 'none',
  },
}));

export default function UTButton() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" size="large"  className={classes.button}>
        Guardar
      </Button>

    </div>
  );
}
