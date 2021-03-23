import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#c0c0c0', height: '100vh' }} >
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}><Paper className={classes.paper}>
              <TextField id="outlined-basic" fullWidth label="Ingrese" variant="outlined"  />
              </Paper></Grid>
            
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="secondary">
                    AC
               </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}> <Button variant="outlined" color="primary">
                  CE
      </Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}> <Button variant="outlined" color="primary">
                  %
      </Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}> <Button variant="outlined" color="primary">
                  /
      </Button></Paper>
              </Grid>
              
              <Grid item xs={3}>
                <Paper className={classes.paper}> <Button variant="outlined">7</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}> <Button variant="outlined">8</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}> <Button variant="outlined">9</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}><Button variant="outlined" color="primary">
                  X
      </Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}><Button variant="outlined">4</Button></Paper>
              </Grid><Grid item xs={3}>
                <Paper className={classes.paper}><Button variant="outlined">5</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}><Button variant="outlined">6</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}><Button variant="outlined" color="primary">
                  -
      </Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}><Button variant="outlined">1</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}><Button variant="outlined">2</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}><Button variant="outlined">3</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}><Button variant="outlined" color="primary">
                  +
      </Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}> <Button variant="outlined">0</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}> <Button variant="outlined">.</Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}> <Button variant="outlined">=</Button></Paper>
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>


    </React.Fragment>
  );
}

export default App;
