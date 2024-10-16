import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FtMocksIcon from './FtMocksIcon';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}
    >  
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
        {/* <Button   color="primary" variant="text" size="large">
               FtMocks
              </Button> */}
         
          <Box sx={{ display: 'flex', alignItems: 'center', px: 0  }}>
            {/* <FtMocksIcon /> */}
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>FtMocks</Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 1 }}>
              <Button variant="text" color="info" size="small">
              <a href="Products"> Products</a>
              </Button>
              <Button variant="text" color="info" size="small">
              <a href="Docs"> Docs</a>
              </Button>
              <Button variant="text" color="info" size="small">
              <a href="Team"> Team</a>
              </Button>
              <Button variant="text" color="info" size="small">
              <a href="Pricing"> Pricing</a>
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              <a href="Support"> Support</a>
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              <a href="Blog">Blog </a>
              </Button>
            </Box>
          </Box>
          
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem>products</MenuItem>
                <MenuItem>Docs</MenuItem>
                <MenuItem>Team</MenuItem>
                <MenuItem>pricing</MenuItem>
                <MenuItem>support</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
