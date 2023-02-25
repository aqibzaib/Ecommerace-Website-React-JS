import React from "react";
import { Toolbar, Typography, Grid, Link } from "@mui/material";
// import { makeStyles } from "@mui/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
// const useStyles = makeStyles({
//   link: {
//     textDecoration: "none",
//     underline: "none",
//     color: "inherit",
//     "&:hover": {
//       color: "rgb(254,111,95)",
//       borderBottom: "1px solid rgb(254,111,95)",
//     },
//   },
// });

export default function Navbar() {
  // const classes = useStyles();
  function addTransition(e) {
    e.target.style.color = "rgb(254,111,95)";
    e.target.style.borderBottomColor = "rgb(254,111,95)";
    // e.target.style.paddingLeft = "5px";
    // e.target.style.paddingRight = "5px";
    e.target.style.paddingBottom = "3px";
  }
  function removeTransition(e) {
    e.target.style.color = "black";
    e.target.style.borderBottomColor = "transparent";
    // e.target.style.paddingLeft = "";
    // e.target.style.paddingRight = "";
    e.target.style.paddingBottom = "";
  }
  const style = {
    textDecoration: "none",
    color: "black",
    borderBottom: "2px solid transparent",
    transition: "color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out",
  };
  return (
    ///Note: Remove Height: 56 After Completition
    //Hover effect also will add

    <Toolbar
      sx={{
        marginX: "4.625rem",
        background: "white",
        color: "black",
        marginTop: "3.5rem",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Link href="#" underline="none" color="inherit">
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
          </Link>
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
          <Grid item>
            <Link
              href="#"
              underline="none"
              color="inherit"
              onMouseEnter={(e) => {
                addTransition(e);
              }}
              onMouseLeave={(e) => {
                removeTransition(e);
              }}
              style={style}
            >
              Home
            </Link>
          </Grid>

          <Grid item>
            <Link
              href="#"
              underline="none"
              color="inherit"
              onMouseEnter={(e) => {
                addTransition(e);
              }}
              onMouseLeave={(e) => {
                removeTransition(e);
              }}
              style={style}
            >
              Catalog
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#"
              underline="none"
              color="inherit"
              onMouseEnter={(e) => {
                addTransition(e);
              }}
              onMouseLeave={(e) => {
                removeTransition(e);
              }}
              style={style}
            >
              Shop
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#"
              underline="none"
              color="inherit"
              onMouseEnter={(e) => {
                addTransition(e);
              }}
              onMouseLeave={(e) => {
                removeTransition(e);
              }}
              style={style}
            >
              Page
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#"
              underline="none"
              color="inherit"
              onMouseEnter={(e) => {
                addTransition(e);
              }}
              onMouseLeave={(e) => {
                removeTransition(e);
              }}
              style={style}
            >
              Blog
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#"
              underline="none"
              color="inherit"
              onMouseEnter={(e) => {
                addTransition(e);
              }}
              onMouseLeave={(e) => {
                removeTransition(e);
              }}
              style={style}
            >
              Elements
            </Link>
          </Grid>
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
            <Link>
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
