import React from "react";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import PrintIcon from '@material-ui/icons/Print';
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <Drawer   
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem button key="Printer" {...{to:"/printer", component: Link}}>
          <ListItemText primary="Setup Printer"></ListItemText>
          <ListItemIcon><PrintIcon /></ListItemIcon>
        </ListItem>
        <ListItem button key="Home" {...{to:"/home", component: Link}}>
          <ListItemText primary="Home"></ListItemText>
          <ListItemIcon><HomeIcon /></ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNav;