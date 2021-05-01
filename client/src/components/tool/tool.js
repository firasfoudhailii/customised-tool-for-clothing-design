import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';import './tool.scss'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { shadows } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));



const Tool = () => {
  const classes = useStyles();

   
    return (
        <div className="test">
     
     
       <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>Choose a semi-prototype</MenuItem>
          <MenuItem>Add text</MenuItem>
          <MenuItem>Import an image</MenuItem>
        </MenuList>
      </Paper>
      </div>
    
         <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: 'white', height: '80vh' }} />
      </Container>
    </React.Fragment>
            
       
       
      
      </div>




    );
}

export default Tool;