import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const Seating = () => {
  const numbers = Array.from({ length: 50 }, (_, index) => index + 1);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent="center"
      height="100vh"
      width="100%"
      backgroundColor="black"
      alignItems={"center"}
    >
      <Box
        backgroundColor="grey"
        width={"50%"}
        display="flex"
        justifyContent={"space-evenly"}
        sx={{ borderRadius: "20px" }}
      >
        <Typography color="white" variant="button">
          Occupied
        </Typography>
        <Typography color={blue[200]} variant="button">
          Selected
        </Typography>
        <Typography color="white" variant="button">
          Available
        </Typography>
      </Box>
      <Typography
        backgroundColor="white"
        width={"50%"}
        height="3px"
        marginTop="20px"
        color={blue[300]}
        align="center"
      >
        SCREEN
      </Typography>

      <Box
        width={"50%"}
        display={"flex"}
        justifyContent={"space-evenly"}
        margin={"40px"}
      ></Box>
    </Box>
  );
};

export default Seating;
