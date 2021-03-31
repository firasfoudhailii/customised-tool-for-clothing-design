import React,{ useState, useEffect } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import * as s from './Sidebar.styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = -75.9;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
      width:`81.6%`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% + ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


const Sidebar = props => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    const { backgroundImage = '',
            logo = '',
            SidebarHeader = {
                fullName: '',
                shortName: ''
            },
            menuItems = [],
            fonts = {
                header: '',
                menu: ''
            },
            colorPalette = {
                bgColor1: 'rgba(11, 171, 100, 0.8)',
    bgColor2: 'rgba(59, 183, 143, 0.8)',
    fontColor: 'rgba(22, 46, 39)',
    fontColorSelected: 'rgba(255, 255, 255)',
    dividerColor: 'rgba(122, 204, 178)',
    selectedBackgroundCollapsedMode: 'light'
            }
    } = props;
    
     // State
    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(SidebarHeader.fullName);
    const [subMenusStates, setSubmenus] = useState({});
    const logoo = ('images/logo.png')

   

    // Effect
    // Update of header state
    useEffect(() => {
        isSidebarOpen ? setTimeout(() => setHeader(SidebarHeader.fullName), 300) : setHeader(SidebarHeader.shortName);
    }, [isSidebarOpen, SidebarHeader])


    // Update of sidebar state
    useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth < 720 && isSidebarOpen) setSidebarState(false);
            else setSidebarState(true) 
        }
        window.addEventListener('resize', updateWindowWidth);

        return () => window.removeEventListener('resize', updateWindowWidth);
    }, [isSidebarOpen]);

    // Add index of menu items with submenus to state
    useEffect(() => {
        const newSubmenus = {};

        menuItems.forEach((item, index) => {
            const hasSubmenus = !!item.subMenuItems.length;

            if (hasSubmenus){
                newSubmenus[index] = {};
                newSubmenus[index]['isOpen'] = false;
                newSubmenus[index]['isSelected'] = null;
            }
        })
        

        setSubmenus(newSubmenus)

    }, [menuItems]);

    const states = {
        2: {
            isOpen: false,
            selected: null
        }
    }
    
    const handleMenuItemClick = (name, index )=> {
        setSelectedMenuItem(name);

        const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

        if (subMenusStates.hasOwnProperty(index)){
            subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen']
            setSubmenus(subMenusCopy)
        }

    }



    const menuItemsJSX = menuItems.map((item,index) =>{
        const isItemSelected = selected === item.name;

        const hasSubmenus = !!item.subMenuItems.length;
        const isOpen = subMenusStates[index]?.isOpen;

        const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            return (
                <s.SubMenuItem key={subMenuItemIndex} colorPalette={colorPalette}>{subMenuItem.name}</s.SubMenuItem>
            )
        })

        return (
          <s.ItemContainer key={index}>
            <Link to={item.to} style={{textDecoration: 'none'}}>
            <s.MenuItem  
                font={fonts.menu}
                selected={isItemSelected}
                colorPalette={colorPalette}
                onClick={() => handleMenuItemClick(item.name, index)}
                isSidebarOpen={isSidebarOpen}
                isOpen={isOpen}
            >
                <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
                <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                {hasSubmenus && isSidebarOpen &&(
                    <s.DropdownIcon selected={isItemSelected} isOpen={isOpen} colorPalette={colorPalette} />
                )}
            </s.MenuItem>
            </Link>
            {/* display submenus */}
            <AnimatePresence>
            {hasSubmenus && isOpen && (
                <motion.nav  
                    initial={{ opacity: 0, y: -15}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.4}}
                    exit={{ opacity: 0, y: -15}}
                >
                <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen} colorPalette={colorPalette}>{subMenusJSX}</s.SubMenuItemContainer>
                </motion.nav>
            )}
            </AnimatePresence>
          </s.ItemContainer>
        )
    });
    

    return (<s.SidebarContainer  colorPalette={colorPalette} backgroundImage={backgroundImage}isSidebarOpen={isSidebarOpen} >
              <s.SidebarHeader font={fonts.header} >{header}</s.SidebarHeader>
              <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
              <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>

                  <s.Toggler />
               

              </s.TogglerContainer>
              </s.SidebarContainer>
           )
}

export default Sidebar