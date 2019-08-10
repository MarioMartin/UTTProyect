import React, { Fragment } from 'react';
import { makeStyles , withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import UTTCertificaciones from './UTTCertiificaciones';
import UTTPrincipalesClientes from './UTTPrincipalesClientes';
import UTTLicitacionesAdjudicadas from './UTTLicitacionesAdjudicadas';

import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const ExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(0),
      margin: theme.spacing(0),
      //backgroundColor:'gray',
    },
  }))(MuiExpansionPanelDetails);
  
  export default function DespliegueEmpresa(props) {
    const [expanded, setExpanded] = React.useState(false);
    const [data, setData] = React.useState(props.data);
  
    const handleChange = panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
      <div>
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Certificaciones</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <UTTCertificaciones data={data.certificaciones} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Servicios</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Productos</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Principales Clientes</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <UTTPrincipalesClientes data={data.principalesClientes} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Licitaciones Aplicadas</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <UTTLicitacionesAdjudicadas data={data.licitaciones} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }