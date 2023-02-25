import React from "react";
import { Box, Typography, Link } from "@mui/material";

function AfterNavbar() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "black",
          marginTop: "0.75rem",
          height: "3.3rem",
        }}
      >
        <Typography
          variant="button"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "whitesmoke",
          }}
        >
          <Link href="#" underline="none" color="inherit">
            GET 20% SALE WITH COUPONE CODE CGBNJKI25
          </Link>
        </Typography>
      </Box>
    </>
  );
}

export default AfterNavbar;
