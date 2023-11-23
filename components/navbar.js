// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "../styles/Home.module.css";
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo on the left */}
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>

        {/* Navigation links on the right */}
        <Link href="/"><Button color="inherit">Home</Button></Link>
       <Link href="/about"> <Button color="inherit">About</Button> </Link>
       <Link href="/pizza"> <Button color="inherit">Pizza</Button></Link>
       <Link href="/contact"><Button color="inherit">Contact</Button></Link> 
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
