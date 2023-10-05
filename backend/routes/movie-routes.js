import express from "express";
import {
  addMovie,
  getAllMovies,
  getMovieById,
  seatingChange
} from "../controllers/movie-controller";
const movieRouter = express.Router();
movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", addMovie);
movieRouter.post("/seating/:id", seatingChange);

export default movieRouter;
