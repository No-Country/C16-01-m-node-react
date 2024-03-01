// Importación de módulos y componentes de React, Material-UI y Iconify
"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-mdi/home';
import messageTextIcon from '@iconify/icons-mdi/message-text';
import webIcon from '@iconify/icons-mdi/web';
import calendarIcon from '@iconify/icons-mdi/calendar';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigation = [
    { name: "Inicio", href: "/dashboard", current: false, icon: homeIcon },
    { name: "Comunicaciones", href: "/dashboard/comunicaciones", current: false, icon: messageTextIcon },
    { name: "Plataformas", href: "/dashboard/plataformas", current: false, icon: webIcon },
    { name: "Reuniones", href: "/dashboard/reuniones", current: false, icon: calendarIcon },
  ];

  const drawer = (
    <Box sx={{ backgroundColor: "#e2e0d5" }}>
      <Toolbar />
      <Divider />
      <List>
        {navigation.map((text, index) => (
          <Link href={text.href} key={index}>
            <ListItemButton sx={{ "&:hover": { color: "#ed6f37" } }}>
              <ListItemIcon sx={{ fontSize: 25, marginRight: -1, color: 'black'}}>
                <Icon icon={text.icon} />
              </ListItemIcon>
              <ListItemText primary={text.name} sx={{ fontFamily: 'Calibri', fontSize: 16, fontWeight: 'bold' }} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      />
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#e2e0d5",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
