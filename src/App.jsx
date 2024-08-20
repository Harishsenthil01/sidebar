import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Contacts, Notifications, Search, Settings, UnfoldMore } from '@mui/icons-material';
import { Avatar, Badge, InputBase } from '@mui/material';
import UserIcon from '@mui/icons-material/Person'; // User
import ProductIcon from '@mui/icons-material/Category'; // Product
import OrderIcon from '@mui/icons-material/Receipt'; // Order
import InvoiceIcon from '@mui/icons-material/ReceiptLong'; // Invoice
import BlogIcon from '@mui/icons-material/Article'; // Blog
import JobIcon from '@mui/icons-material/Work'; // Job
import TourIcon from '@mui/icons-material/TravelExplore'; // Tour
import logo from './assets/images/logo.png';
import logo1 from './assets/images/logo-1.png';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(13)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'end',
  },
}));

const SearchBar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0px 10px',
  borderRadius: theme.shape.borderRadius,
  width: '15%',
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#FFFF',
});

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white' }}>
        <StyledToolbar>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <div>
              <IconButton
                color="black"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                }}
              >
                <img src={logo} alt="Logo" style={{ height: '25px', width: 'auto', marginRight: '20px' }} />
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>

              <IconButton>
                <img src={logo1} alt="Logo" style={{ height: '25px', width: 'auto', marginRight: '20px' }} />
                <Box component="span" sx={{ fontSize: '14px', fontWeight: 'bold', ml: 1 }}>Team1</Box>
                <Box component="span" sx={{ fontSize: '14px', color: 'success.main', ml: 1 }}>free</Box>
                <UnfoldMore fontSize="small" sx={{ ml: 1 }} />
              </IconButton>
            </div>
            <div>
              <Icons>
                <Search sx={{ color: '#bdb1b1' }} />
                <SearchBar>
                  <InputBase sx={{ width: '100%', color: 'black' }} placeholder="Search..." />
                </SearchBar>
                <IconButton aria-label="collapse">
                  <img src={logo1} alt="Logo" style={{ height: '25px', width: 'auto' }} />
                </IconButton>
                <Badge badgeContent={4} color="error">
                  <Notifications sx={{ color: "#bdb1b1" }} />
                </Badge>
                <Contacts sx={{ color: "#bdb1b1" }} />
                <Settings sx={{ color: "#bdb1b1" }} />
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp"
                  onClick={(e) => setOpen(true)}
                />
              </Icons>
            </div>
          </div>
        </StyledToolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img src={logo} alt="Logo" style={{ height: '25px', width: 'auto' }} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Typography color={'#919EAB'}>Overview</Typography>
          {[
            { text: 'App', icon: <AppIcon />, bgColor: 'green', color: 'white' },
            { text: 'Ecommerce', icon: <ShoppingCartIcon />, bgColor: 'blue', color: 'white' },
            { text: 'Analytics', icon: <BarChartIcon />, bgColor: 'purple', color: 'white' },
            { text: 'Banking', icon: <AccountBalanceIcon />, bgColor: 'orange', color: 'white' },
            { text: 'Booking', icon: <EventIcon />, bgColor: 'red', color: 'white' },
            { text: 'File', icon: <InsertDriveFileIcon />, bgColor: 'teal', color: 'white' },
            { text: 'Course', icon: <SchoolIcon />, bgColor: 'pink', color: 'white'}
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  flexDirection: open ? 'row' : 'column',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 0,
                    justifyContent: 'center',
                    backgroundColor: item.bgColor,
                    color: item.color,
                    borderRadius: '50%',
                    padding: 1,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 1,
                    textAlign: 'center',
                    mt: open ? 0 : 1
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          <Typography color={'#919EAB'}>Management</Typography>
          {[
            { text: 'User', icon: <UserIcon />, bgColor: 'purple', color: 'white', icons: <ChevronRightIcon /> },
            { text: 'Product', icon: <ProductIcon />, bgColor: 'blue', color: 'white', icons: <ChevronRightIcon /> },
            { text: 'Order', icon: <OrderIcon />, bgColor: 'green', color: 'white', icons: <ChevronRightIcon /> },
            { text: 'Invoice', icon: <InvoiceIcon />, bgColor: 'red', color: 'white', icons: <ChevronRightIcon /> },
            { text: 'Blog', icon: <BlogIcon />, bgColor: 'orange', color: 'white', icons: <ChevronRightIcon /> },
            { text: 'Job', icon: <JobIcon />, bgColor: 'pink', color: 'white', icons: <ChevronRightIcon /> },
            { text: 'Tour', icon: <TourIcon />, bgColor: 'teal', color: 'white', icons: <ChevronRightIcon /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  flexDirection: open ? 'row' : 'column',
                  alignItems: open ? 'center' : 'center',
                }}
              >
                
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 0,
                    justifyContent: 'center',
                    backgroundColor: item.bgColor,
                    color: item.color,
                    borderRadius: '50%',
                    padding: 1,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 1,
                    textAlign: 'center',
                    mt: open ? 0 : 1
                  }}
                />
              
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 0,
                    justifyContent: 'center',
                    borderRadius: '50%',
                    padding: 1,
                  }}
                >
                  {item.icons}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
