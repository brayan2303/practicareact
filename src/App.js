/*eslint-disable no-eval */
import "./index.css";
import React, { useState, useEffect, useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
 

//const useStyles = makeStyles((theme) => ({
  //root: {
    //flexGrow: 1,
  //},
  //paper: {
    //padding: theme.spacing(2),
    //textAlign: 'center',
    //color: theme.palette.text.secondary,
  //},
//}));


function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function ClickInput(e) {
 setResult(result.concat(e.target.name));
 debugger

  }

  function Limpiar() {
    setResult(result.slice(0, -1));
  }

  function borrar() {
    setResult("");
  }
  function cal() {
    try {
      setResult(eval(result).toString());
    }
    catch (Error) {
      setResult("Error");
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#c0c0c0', height: '100vh' }} >
          <div className="fond">
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Grid container spacing={4}>

              <Grid item xs={12} ><Paper>
                <TextField id="outlined-basic" fullWidth label="Ingrese valor" variant="outlined" value={result} ref={inputRef} />
              </Paper></Grid>

              <Grid item xs={3}>
                <Paper className="center">
                  <Button id="clear" onClick={borrar} variant="contained" color="secondary">
                    AC
               </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"> <Button id="backspace" onClick={Limpiar} variant="contained" color="primary">
                  CE
      </Button></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton2" type="button" name="%" onClick={ClickInput} variant="outlined" value="%"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton2" type="button" name="/" onClick={ClickInput} variant="outlined" value="/"/></Paper>
              </Grid>


              <Grid item xs={3}>
                <Paper className="center" ><input className="boton" type="button" name="7" onClick={ClickInput} variant="outlined" value="7"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"> <input className="boton" type="button" name="8" onClick={ClickInput} variant="outlined" value="8"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"> <input className="boton" type="button" name="9" onClick={ClickInput} variant="outlined" value="9"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton2" type="button" name="*" onClick={ClickInput} variant="outlined" value="*"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton" type="button" name="4" onClick={ClickInput} variant="outlined" value="4"/></Paper>
              </Grid><Grid item xs={3}>
                <Paper className="center"><input className="boton" type="button" name="5" onClick={ClickInput} variant="outlined" value="5"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton" type="button" name="6" onClick={ClickInput} variant="outlined" value="6"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton2" type="button" name="-" onClick={ClickInput} variant="outlined" value="-"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton" type="button" name="1" onClick={ClickInput} variant="outlined" value="1"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton" type="button" name="2" onClick={ClickInput} variant="outlined" value="2"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton" type="button" name="3" onClick={ClickInput} variant="outlined" value="3"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton2" type="button" name="+" onClick={ClickInput} variant="outlined" value="+"/></Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper className="center"><input className="boton" type="button" name="0" onClick={ClickInput} variant="outlined" value="0"/></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className="center"><input className="boton" type="button" name="." onClick={ClickInput} variant="outlined" value="."/></Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="center"> <input className="boton3" type="button" id="result" onClick={cal} value="=" /></Paper>
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>


    </React.Fragment>
  );
}

export default App;