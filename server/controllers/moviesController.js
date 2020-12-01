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
}