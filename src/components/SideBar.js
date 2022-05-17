import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Chip from '@mui/material/Chip';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomListItemText = styled(ListItemText)({
  fontWeight: 700,
});

const CustomListItem = styled(ListItem)({
  margin: "16px 8px 16px 8px",
});

const CustomChip = styled(Chip)({
  backgroundColor: "#ff5e91",
  borderRadius: 5,
  color: "white",
  fontSize: 18,
});

function SideBar(props) {
  return <Drawer
    sx={{
      width: props.drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: props.drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar sx={{ my: 3, mx: 2 }}>
      <AutoAwesomeMosaicIcon sx={{ fontSize: 40, color: "#ae64ff" }} />
      <Typography sx={{ ml: 1, fontSize: 35, fontWeight: 900, color: "#ae64ff" }}>Analyze.</Typography>
    </Toolbar>

    <List sx={{ m: 4 }}>
      <CustomListItem key="Dashboard" disablePadding>
        <ListItemButton selected={true}>
          <ListItemIcon sx={{ color: "#ae64ff" }}>
            <GridViewIcon sx={{ fontSize: 26 }} />
          </ListItemIcon>
          <CustomListItemText primaryTypographyProps={{ color: "#ae64ff" }} primary="Dashboard"></CustomListItemText>
        </ListItemButton>
      </CustomListItem>

      <CustomListItem key="Product" disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#a5aeb8" }}>
            <ViewInArIcon sx={{ fontSize: 26 }} />
          </ListItemIcon>
          <CustomListItemText primary="Product" />
        </ListItemButton>
      </CustomListItem>

      <CustomListItem key="Favorites" disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#a5aeb8" }}>
            <FavoriteBorderIcon sx={{ fontSize: 26 }} />
          </ListItemIcon>
          <CustomListItemText primary="Favorites" />
        </ListItemButton>
      </CustomListItem>

      <CustomListItem key="Messages" disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#a5aeb8" }}>
            <ChatBubbleOutlineTwoToneIcon sx={{ fontSize: 26 }} />
          </ListItemIcon>
          <CustomListItemText primary="Messages" />
          <CustomChip label="4" size="small" />
        </ListItemButton>
      </CustomListItem>

      <CustomListItem key="Order Lists" disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#a5aeb8" }}>
            <ViewInArIcon sx={{ fontSize: 26 }} />
          </ListItemIcon>
          <CustomListItemText primary="Order Lists" />
          <CustomChip label="2" size="small" />
        </ListItemButton>
      </CustomListItem>

      <CustomListItem key="Product Stock" disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#a5aeb8" }}>
            <ShoppingBasketIcon sx={{ fontSize: 26 }} />
          </ListItemIcon>
          <CustomListItemText primary="Product Stock" />
        </ListItemButton>
      </CustomListItem>
    </List>
    <Divider />

    <List sx={{ m: 4 }} subheader={<ListSubheader>
      <Typography sx={{ fontSize: 15, mb: 1.5 }}>ACCOUNT</Typography>
    </ListSubheader>}>
      <CustomListItem key="Settings" disablePadding>
        <ListItemButton >
          <ListItemIcon sx={{ color: "#a5aeb8" }}>
            <SettingsOutlinedIcon sx={{ fontSize: 26 }} />
          </ListItemIcon>
          <CustomListItemText primary="Settings" />
          <CustomChip label="2" size="small" />
        </ListItemButton>
      </CustomListItem>

      <CustomListItem key="Themes" disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#a5aeb8" }}>
            <EditLocationAltIcon sx={{ fontSize: 26 }} />
          </ListItemIcon>
          <CustomListItemText primary="Themes" />
        </ListItemButton>
      </CustomListItem>

      <CustomListItem key="Help" disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#a5aeb8" }}>
            <HelpOutlineIcon sx={{ fontSize: 26 }} />
          </ListItemIcon>
          <CustomListItemText primary="Help" />
        </ListItemButton>
      </CustomListItem>
    </List>
  </Drawer>
}

export default SideBar
