// Importación de módulos y componentes de React y Material-UI
"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";

// Ancho del Drawer
const drawerWidth = 240;

// Propiedades del componente
interface Props {
  window?: () => Window;
}

// Componente ResponsiveDrawer
export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Función para alternar la apertura y cierre del Drawer en dispositivos móviles
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigation = [
    { name: "Inicio", href: "#", current: false },
    { name: "Comunicaciones", href: "#", current: false },
    { name: "Plataforma", href: "#", current: false },
    { name: "Reuniones", href: "#", current: false },
  ];

  // Contenido del Drawer
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navigation.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  // Contenedor del Drawer según el tipo de ventana especificada en las propiedades
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      />
      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Drawer temporal en dispositivos móviles */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Mejora el rendimiento de apertura en dispositivos móviles
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
        {/* Drawer permanente en pantallas más grandes */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
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
