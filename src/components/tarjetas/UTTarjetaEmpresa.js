import React, { Fragment } from 'react';

import Container from '@material-ui/core/Container';

import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Chip from '@material-ui/core/Chip';
import CheckIcon from '@material-ui/icons/Check';
import { Divider, Icon } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
      },
      icon: {
        verticalAlign: 'bottom',
        height: 50,
        width: 50,
      },
      details: {
          display: 'flex',
        alignItems: 'center',
      },
      column: {        
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
      },
      link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      cabecera: {
        height: 60,
        backgroundColor: '#a100ff',
        color: 'white',
      },
      chip: {
        margin: theme.spacing(1),
      },
      contenedorChip: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      items: {
        verticalAlign: 'middle',
      },
      table: {
        minWidth: 700,
      },
      paper: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
      },
}));

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
function dataEjemplo(iniciativa, descripcion, responsableB, estado, calificacion) {
    return { iniciativa, descripcion, responsableB, estado, calificacion };
  }
  
  const rows = [
    dataEjemplo('PYT-5103', 'Modificaciones Corfo', 'Eugenio Castillo', 'Finalizada', 'Estrellitas'),
    dataEjemplo('Cat. 14567', 'Implementación Tablero Gestión MUS', 'Luis Moreno', 'En Curso', 4.3),
    dataEjemplo('MAY-1213', 262, 16.0, 24, 6.0),
  ];


export default function UTTarjetaEmpresa() {
    const classes = useStyles();

    return (
        <Container fixed>

            <Card className={classes.card}>
                <CardHeader gutterBottom className={classes.cabecera} title="ACCENTURE CHILE" />                        

                <CardContent className={classes.cuerpo}>
                    
                    <div className={clsx(classes.column, classes.logo)}>
                        <Avatar aria-label="Recipe" className={classes.avatar} src="..\images\flechaAzul.png" /> 
                        
                    </div>      
                                
                    <div className={classes.column} />
                    <div className={classes.column}>
                        <Typography variant="caption">
                        Accenture soluciona los retos más difíciles de nuestros clientes al
                        proveer servicios en estrategia, consultoría, transformación digital,
                        tecnología y operaciones. Nos asociamos con más de tres cuartas
                        partes de las compañías Fortune Global 500, impulsando la
                        innovación para mejorar la forma en que el mundo funciona y vive.
                        Con experiencia en más de 40 industrias y en todas las funciones de
                        negocio, ofrecemos resultados transformacionales para un exigente
                        nuevo mundo digital.
                                        
                        </Typography>
                    </div>
                    <Divider />   
                    <div className={classes.column}>
                        <Typography variant="caption" className={classes.items}>
                        <p>
                            <i class="material-icons">
                            picture_in_picture
                            </i>
                            ACCENTURE CHILE, ASESORIAS Y SERVICIOS LIMITADA
                        </p>
                        <p>
                            <i class="material-icons">
                            business
                            </i>
                            EMPRESA MULTINACIONAL
                        </p>
                        <p>
                            <i class="material-icons">
                                language
                            </i>
                            <Link href="https://www.accenture.com/cl-es">
                                Accenture Page
                            </Link>
                        </p>
                        <p>
                            <i class="material-icons">
                                room
                            </i>
                            APOQUINDO 5550, TORRE A, PISO 14, LAS CONDES, SANTIAGO, CHILE
                        </p>
                        </Typography>
                    </div>                                           

                </CardContent>
            </Card>            
            <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.details}>Certificaciones</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.contenedorChip} >
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>         
                   </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.details}>Servicios</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={classes.contenedorChip} >
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>         
                   </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.details}>Productos</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={classes.contenedorChip} >
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>         
                   </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.details}>Principales Clientes</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={classes.contenedorChip} >
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>
                    <Chip className={classes.chip} variant="outlined" size="small" label="Basic Chip" avatar={<Avatar><CheckIcon /></Avatar>}/>         
                   </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.details}>Licitaciones Adjudicadas</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <Paper className={classes.paper}>
                        <Table className={classes.table}>
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Iniciativa</StyledTableCell>
                                <StyledTableCell align="right">Descripci&oacute;n Breve</StyledTableCell>
                                <StyledTableCell align="right">Responsable Banco</StyledTableCell>
                                <StyledTableCell align="right">Estado</StyledTableCell>
                                <StyledTableCell align="right">Calificaci&oacute;n</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map(row => (
                                <StyledTableRow key={row.iniciativa}>
                                <StyledTableCell component="th" scope="row">
                                    {row.iniciativa}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.descripcion}</StyledTableCell>
                                <StyledTableCell align="right">{row.responsableB}</StyledTableCell>
                                <StyledTableCell align="right">{row.estado}</StyledTableCell>
                                <StyledTableCell align="right">{row.calificacion}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </Paper>


                   
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Container>
    );
}
