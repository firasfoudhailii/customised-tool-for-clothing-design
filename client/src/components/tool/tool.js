import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './tool.scss'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import Modal from '../tool-area/tool-area'
import { fabric } from "fabric";
import { ReactComponent as Test } from './__Body1.svg'
import { ReactComponent as Sleeve } from './__sleeve3f.svg'
import { ReactComponent as Neck } from './__neck1f.svg'
import Draggable from 'react-draggable';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import Products from '../products/Products'

const images = [
  {
    url: "/images/Print.png",
    title: "Print",
    width: "40%"
  },
  {
    url: "/images/compton.jpg",
    title: "Compton",
    width: "30%"
  },
  {
    url: "/images/jcrew.png",
    title: "J.CREW",
    width: "30%"
  },
  {
    url: "/images/levis.png",
    title: "Levi's",
    width: "30%"
  }
];


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%"
    },
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));


const Tool = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [background, setBackground] = useState("#fdfdfd");

  const setStyle = (background) => {
    setBackground(background)
  }

    return (
      
        <div className="test">
     
       <div className={classes.root}>
        
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button><AccessibilityIcon color="primary"/><Products/></Button>
        <Button
         aria-controls="simple-menu"
         aria-haspopup="true"
         onClick={handleClick}>
        <ImageIcon color="primary"/>Designs
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <div className={classes.root}>
            {images.map((image) => (
              <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            ))}
          </div>
        </MenuItem>
      </Menu>
        <Button><TextFieldsIcon color="primary"/>Add text</Button>
        <Button><CloudUploadIcon color="primary"/>Upload</Button>
        <Button ><UndoIcon color="primary"/>Undo</Button>
        <Button><RedoIcon color="primary"/>Redo</Button>

      </ButtonGroup>
    
      </div>
    
         <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">

    
     <br/><br/>

    
     <Test  width={500}  style={{border:'1px solid gray'}} />
    <Draggable>
    <Sleeve width={730} />
    </Draggable>
    <Draggable>
    <Neck id='nck' width={550} />
    </Draggable>

    
         
      </Container>
    </React.Fragment>
         
       
 

      </div>



    );
}

export default Tool;