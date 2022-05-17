import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function ToolBar(props) {
    return <AppBar
        position="fixed"
        sx={{
            width: `calc(100% - ${props.drawerWidth}px)`,
            ml: `${props.drawerWidth}px`,
            boxShadow: 0,
            backgroundColor: "white",
        }}
    >
        <Toolbar sx={{ height: 110, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <Stack direction="row" sx={{display: "flex", alignItems: "center" }}>
                <IconButton
                    sx={{
                        width: 50,
                        height: 50,
                        mr: 2,
                        border: 0,
                        backgroundColor: "#e4e2ea",
                        borderRadius: "50%"
                    }}>
                    <NotificationsNoneIcon sx={{ width: 30, height: 30 }} />
                    </IconButton>
                <Stack
                    direction="row"
                    sx={{
                        px: 2,
                        py: 0.5,
                        border: 1,
                        borderColor: "#a5aeb8",
                        borderRadius: 2
                    }}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <SearchIcon sx={{ width: 30, height: 30 }} />
                    </IconButton>
                    <InputBase
                        sx={{ color: "gray" }}
                        placeholder="Search or type keywords"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Stack>
            </Stack>
        </Toolbar>
        <Divider />
    </AppBar>
}

export default ToolBar;
