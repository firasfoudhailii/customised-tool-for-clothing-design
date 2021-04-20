import React from 'react';
import PersistentDrawerLeft from '../../MainView/Nav/Nav'
import Footer from '../../MainView/Footer/Footer'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import BackupIcon from '@material-ui/icons/Backup';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


function Additem() {
 const classes = useStyles();
 
    return (

        <main class="page-content" >
        <PersistentDrawerLeft/>
        <Box
         display="flex"
         alignItems="center"
         alignContent="flex-start"

       >
        <form className={classes.root} noValidate autoComplete="off">
    
        
        
  

      <Grid container spacing={2} justify-content="column" alignItems="flex-end">
        <Grid item>
          <CreateIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Name" />
        </Grid>
      </Grid>

    
      <Grid container spacing={2} justify-content="column" alignItems="flex-end">
        <Grid item>
          <BackupIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Click here to upload image" />
        </Grid>
      </Grid>
     
      

 
     
   
  </form>

  </Box>
      <Footer/>
            
        </main>
    )
}

export default Additem;