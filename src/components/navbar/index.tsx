import React from "react";

import { AppBar, Typography , Grid } from "@material-ui/core";

import logo from '../../assets/images/Luvino-logo.png';

import useStyles from "./style";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar color="secondary" position="static" className={classes.navbar}>

      <div className={classes.logoBox}>
        <img src={logo} className={classes.logo} />
      </div>
    <Grid container justify="space-around" className={classes.list}>

      <Grid item >
        <Typography className={classes.links}>Home</Typography>
      </Grid >
      <Grid item>
        <Typography className={classes.links}>Xablau</Typography>
      </Grid >
      <Grid item>
        <Typography className={classes.links}>Wines</Typography>
      </Grid >


    </Grid>

    </AppBar>
  );
};

export default Navbar;
