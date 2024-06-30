import React, { useState } from 'react';
import { IconButton, Box, List, ListItem, ListItemText, Drawer, Toolbar, Divider, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AddTask from './AddTask';  // Import your AddTask component
import TaskList from './TaskList';  // Import your TaskList component
import logo from '../assets/logo.png';

const drawerWidth = 250;

const HamburgerMenu = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [view, setView] = useState('view'); // State to track the current view

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ height: '100%', backgroundColor: '#1a1a1a', color: '#fff' }}>
            <Toolbar />
            <Box mb={2} display="flex" justifyContent="center">
                <img src={logo} alt="image not found" height="180px" />
            </Box>

            <List>
                <Divider sx={{ bgcolor: '#00b8a9' }} />
                <ListItemButton onClick={() => setView('view')} sx={{ '&:hover': { backgroundColor: '#00b8a9', color: '#fff',  } }}>
                    <ListItemText primary="View Tasks" primaryTypographyProps={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }} />
                </ListItemButton>
                <Divider sx={{ bgcolor: '#00b8a9' }} />
                <ListItemButton onClick={() => setView('add')} sx={{ '&:hover': { backgroundColor: '#00b8a9', color: '#fff',  } }}>
                    <ListItemText primary="Add Task" primaryTypographyProps={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }} />
                </ListItemButton>
                <Divider sx={{ bgcolor: '#00b8a9' }} />
            </List>
        </div>
    );



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <IconButton
                onClick={handleDrawerToggle}
                sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1000, color: '#00b8a9' }}
            >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{

                    zIndex: 999,
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, overflow: 'hidden' },
                }}
            >
                {drawer}
            </Drawer>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {view === 'add' ? <AddTask /> : <TaskList />}
            </Box>
        </Box>
    );
};

export default HamburgerMenu;
