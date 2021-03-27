import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);



class EjemploClass extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
             <Button
               variant="contained"
               color="primary"
               className={classes.button}
               endIcon={<Icon>send</Icon>}
             >
               Send
             </Button>
       
            </div>
       
           );
    }
}
export default EjemploCalss