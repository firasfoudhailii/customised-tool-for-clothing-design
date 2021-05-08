import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Sleeve1f } from './__sleeve1f.svg'
import { ReactComponent as Sleeve2f } from './__sleeve2f.svg'
import { ReactComponent as Sleeve3f } from './__sleeve3f.svg'
import { ReactComponent as Sleeves1 } from './__Sleeves1.svg'
import { ReactComponent as Sleeves2 } from './__Sleeves2.svg'
import { ReactComponent as Sleeve4f } from './__sleeve4f.svg'
import { ReactComponent as Sleeve5f } from './__sleeve5f.svg'
import { ReactComponent as Neck1 } from './__Neck1.svg'
import { ReactComponent as Neck2 } from './__Neck2.svg'
import { ReactComponent as Neck1f } from './__neck1f.svg'
import { ReactComponent as Neck2f } from './__neck2f.svg'
import { ReactComponent as Neck3f } from './__neck3f.svg'
import { ReactComponent as Neck4f } from './__neck4f.svg'
import { ReactComponent as Pocket2 } from './__Pocket2.svg'
import { ReactComponent as Pocket3 } from './__Pocket3.svg'
import { ReactComponent as Veste_Button } from './Veste_Button.svg'
import { ReactComponent as Veste_Perl } from './Veste_Perl.svg'
import { ReactComponent as Veste_Pocket } from './Veste_Pocket.svg'
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Products() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <typography variant="outlined" color="primary" onClick={handleClickOpen}>
        Products
      </typography>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}
      maxWidth="md"
      fullWidth
     
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Choose a product
        </DialogTitle>
        <DialogContent dividers >
          
        <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={4}>
          <Paper className={classes.paper}><Sleeve1f/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Sleeve2f/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Sleeve3f/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Sleeve4f/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Sleeve5f/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Sleeves1/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Sleeves2/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Neck1/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Neck2/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Neck1f/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Neck2f/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Neck3f/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Neck4f/></Paper>
        </Grid> 
        <Grid item xs={4}>
          <Paper className={classes.paper}><Pocket2/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Pocket3/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Veste_Button/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Veste_Perl/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Veste_Pocket/></Paper>
        </Grid>

      </Grid>
    </div>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}