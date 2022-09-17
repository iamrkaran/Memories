import React from "react";
import { makeStyles } from "tss-react/mui";
import { AppBar, Typography } from "@mui/material";
import memories from "../../images/quicknews.png";


import useStyles from "./styles";



const Navbar = () => {
    const { classes } = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img className={classes.image} src={memories} alt="icon" height="60" />
    </AppBar>
  );
};

export default Navbar;
