import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import ChairIcon from "@mui/icons-material/Chair";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api-helpers/api-helpers";

const NumberRange = ({ start, end, movie }) => {
  const numbers = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
  );
  return (
    <Box marginY="20px" display={"flex"} justifyContent={"space-between"}>
      {numbers.map((number, index) => {
        if (movie.bookedSeats.includes(number)){
          return(
            <Box color="grey">
          <ChairIcon />
          <Typography key={number} align="center">
            {number}
          </Typography>
        </Box>
          )
        }
        else{
        return(
        <Box color={blue[100]}>
          <ChairIcon />
          <Typography key={number} align="center">
            {number}
          </Typography>
        </Box>
      )}
      })}
    </Box>
  );
};
const Seating = () => {
  const [movie, setMovie] = useState();
  const id = useParams().id;

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Box>
      {movie && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent="center"
          height="100vh"
          width="100%"
          backgroundColor="black"
          alignItems={"center"}
        >
          <Typography variant="h3" color="white" marginBottom={"20px"}>
            {movie.title}
          </Typography>
          <Box
            backgroundColor="grey"
            width={"50%"}
            display="flex"
            justifyContent={"space-evenly"}
            sx={{ borderRadius: "20px" }}
          >
            <Typography color="grey" variant="button">
              Occupied
            </Typography>
            {/* <Typography color={blue[200]} variant="button">
          Selected
        </Typography> */}
            <Typography color="white" variant="button">
              Available
            </Typography>
          </Box>
          <Typography
            backgroundColor="white"
            width={"50%"}
            height="2px"
            marginTop="20px"
            color={blue[300]}
            align="center"
            gutterBottom
            variant="h6"
          >
            SCREEN
          </Typography>

          <Box
            width={"50%"}
            display={"flex"}
            flexDirection={"column"}
            margin={"40px"}
          >
            <NumberRange start={1} end={10} movie={movie} />
            <NumberRange start={11} end={20} movie={movie} />
            <NumberRange start={21} end={30} movie={movie} />
            <NumberRange start={31} end={40} movie={movie} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Seating;
