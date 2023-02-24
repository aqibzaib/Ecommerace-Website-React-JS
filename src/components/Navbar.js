import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    ///Note: Remove Height: 56 After Completition
    <AppBar position="static" sx={{ background: "white", height: "56px" }}>
      <Toolbar
        sx={{
          marginX: "4.625rem",
          background: "white",
          color: "black",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <a>
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  letterSpacing: "0.15rem",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Shopper.
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            spacing={4}
            sx={{
              marginLeft: "3.34rem",
              fontWeight: "bold",
            }}
          >
            <Grid item>Home</Grid>
            <Grid item>Catalog</Grid>
            <Grid item>Shop</Grid>
            <Grid item>Pages</Grid>
            <Grid item>Blog</Grid>
            <Grid item>Elements</Grid>
          </Grid>
          <Grid item xs={2} container justifyContent="flex-end" spacing={1.9}>
            <Grid item>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
