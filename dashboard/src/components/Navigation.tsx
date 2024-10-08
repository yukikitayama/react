import * as React from 'react';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

interface NavigationProps {
  open: boolean,
  toggleDrawer: () => void
};

interface StyledAppBarProps {
  open: boolean
}

const StyledAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })<StyledAppBarProps>(
  ({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    // Styles when menu is open
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  })
);

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <StyledAppBar open={props.open}>
      <Toolbar>
        <IconButton 
          onClick={props.toggleDrawer} 
          color="inherit"
          edge="start" // Move menu icon to left
          sx={{ 
            ...(props.open && { display: 'none'} ),
            marginRight: '36px' // Put space between menu icon and title
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Yuki Kitayama
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navigation;