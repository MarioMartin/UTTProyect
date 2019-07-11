import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles({
  grid: {
    width: 230,
    display:'inherit',
  },
});

export default function UTDatePicker({onGetData}) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const classes = useStyles();

  function handleDateChange(date) {
    setSelectedDate(date);
    onGetData(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Fecha Respuesta"
          value={selectedDate}
          format="dd/MM/yyyy"
          minDate={new Date()}
          invalidDateMessage="Formato invalido"
          minDateMessage="Fecha no puede ser menor"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          cancelLabel="CANCELAR"
          autoOk
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}