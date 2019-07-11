import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 230,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function UTSelect({ onChange }) {
  const classes = useStyles();
  const [value, setValue] = React.useState({

  });

  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
    onChange(event);
  }

  return (
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-simple">Estado</InputLabel>
      <Select
        value={value.age}
        onChange={handleChange}
        name='estado'
        inputProps={{
          name: 'age',
          id: 'age-simple',
        }}
      >
        <MenuItem value={'Baja'}>Baja</MenuItem>
        <MenuItem value={'Media'}>Media</MenuItem>
        <MenuItem value={'Alta'}>Alta</MenuItem>
      </Select>
    </FormControl>
  );
}