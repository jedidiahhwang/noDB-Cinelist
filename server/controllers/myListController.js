const e = require("express");
const movies = require("../data.json");

const myList = {
    items: [],
}

let myListId = 0;

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

// @movie in cart
/*
  {
    id: number,
    title: string,
    image: string,
    rating: number,
    comments: string,
    myList_id: number,
  }
*/

module.exports = {
    getMyList: (req, res) => {
        res.status(200).send(myList);
    },
    addToMyList: (req, res) => {
        const {movie_id} = req.body;

        const index = myList.items.findIndex((element) => element.id === +movie_id);

        if (index === -1) {
            // What to do if the movie is not in my list
            const movie = movies.find((element) => element.id === +movie_id);
            console.log(movie);
            movie.myList_id = myListId;

            myList.items.push(movie);
            myListId++;
        } else {
            // What to do if the movie is already in my list
            res.status(400).send(`Movie is already in list`);
        }
        res.status(200).send(myList);
    },
    rateMovie: (req, res) => {
        const {myList_id} = req.params;

        // You can either "increase" or "decrease" the rating, starting at 0
        const {action} = req.query;
        
        const index = myList.items.findIndex((element) => element.myList_id === +myList_id);

        if (index === -1) {
            return res.status(404).send("Movie not in list");
        }

        if (action === "increase") {
            myList.items[index].rating++;
        } else if (action === "decrease") {
            if (myList.items[index].rating === 0) {
                return res.status(400).send(`Select a number between 0 and 10`);
            } else {
                myList.items[index].rating--;
            }
        } else {
            return res.status(400).send(`Query ${action} is not supported. Use either "increase" or "decrease"`);
        }
        res.status(200).send(myList);
    },
    commentMovie: (req, res) => {
        const {myList_id, comments} = req.body;

        const index = myList.items.findIndex((element) => element.myList_id === +myList_id);

        if (index === -1) {
            return res.status(404).send("Movie not in list");
        }

        myList.items[index].comments = comments;
        res.status(200).send(myList);
    },
    removeFromMyList: (req, res) => {
        const {myList_id} = req.params;

        const index = myList.items.findIndex((element) => element.myList_id === +myList_id);

        if (index === -1) {
            return res.status(404).send("Movie not in list");
        }
        myList.items.splice(index, 1);
        res.status(200).send(myList);
    }
}