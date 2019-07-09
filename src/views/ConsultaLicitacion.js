import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class ConsultaLicitacion extends Component {

  constructor() {
    super();
    this.state = {
      licitacion: {},
    };
  }

  componentDidMount() {

    const { licitacion } = this.props.location.state
    this.setState(licitacion)
    console.log();
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper >xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper >xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper >xs=6</Paper>
            </Grid>
           
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default ConsultaLicitacion;