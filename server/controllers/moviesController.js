const movies = require("../data.json");

// @movie
/*
  {
    id: number,
    title: string,
    image: string,
    rating: number,
    comments: string
  }
*/

module.exports = {
    getAllMovies: (req, res) => {
        res.status(200).send(movies);
    },
    filterMovies: (req, res) => {
      const {title} = req.body;
      const {action} = req.query;

      let filteredMovie = [];

      console.log(title);

      const index = movies.findIndex((element) => element.title === title);
      console.log(index);

      if (index === -1) {
        res.status(404).send(`Movie does not exist`);
      }

      if (action === "filter") {
        filteredMovie.push(movies[index]);
        res.status(200).send(filteredMovie);
      }
    },
    clearMovies: (req, res) => {
      res.status(200).send(movies);
    }
}