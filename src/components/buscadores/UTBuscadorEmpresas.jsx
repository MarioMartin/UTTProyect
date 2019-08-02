import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    minWidth: 190,
    maxWidth: 500,
    display: 'block',
  },
  input: {
    display: 'flex',
    //width: 300,
    padding: 0,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 2,
    fontSize: 16,
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  divider: {
    height: theme.spacing(2),
  },
  iconButton: {
    padding: 2,

    //alignItems:'center',
  },
  grid: {
    backgroundColor: 'white',
    border: '1px solid white',
    height: 45,
    [theme.breakpoints.down('sm')]: {
      //Justify: "center",
      //justifyContent: "center",
    }
  },
}));

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func

  ]),
};

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

const components = {
  Control,
  NoOptionsMessage,
  Option,
};

export default function UTBuscadorEmpresas({data, getBusqueda}) {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(null);
  const [empresas, setEmpresas] = React.useState(data);

  const suggestions = empresas.map((data, i) => ({
    value: data,
    label: data,
  }));


  function handleChangeSingle(value) {


   /* const empresa = listaEmpresas.filter((e, i) => {  
      return e == value.value; 
    })

    setEmpresas(empresa);*/
    //getData(value.value);
    setSingle(value);
    //console.log(value);
    getBusqueda(value.value);
  }



  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div className={classes.root}>
      <Select
        classes={classes}
        styles={selectStyles}
        inputId="react-select-single"
        TextFieldProps={{
          InputLabelProps: {
            htmlFor: 'react-select-single',
            shrink: true,
          },
        }}
        placeholder="Selecciona Empresa"
        options={suggestions}
        components={components}
        value={single}
        onChange={handleChangeSingle}
      />
    </div>
  );
}