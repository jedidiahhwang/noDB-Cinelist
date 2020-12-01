const express = require("express");
const moviesCtrl = require("./controllers/moviesController");
const myListCtrl = require("./controllers/myListController");

const app = express();
const SERVER_PORT = 5000;

app.use(express.json());

// Movies endpoints
app.get("/api/movies", moviesCtrl.getAllMovies); // Postman passed

// MyList endpoints
app.get("/api/myList", myListCtrl.getMyList); // Postman passed
app.post("/api/myList", myListCtrl.addToMyList); // Postman passed
app.put("/api/myList/:myList_id", myListCtrl.rateMovie); // Postman passed
app.put("/api/myList/comments/:myList_id", myListCtrl.commentMovie); // Postman passed
app.delete("/api/myList/:myList_id", myListCtrl.removeFromMyList);// Postman passed

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));