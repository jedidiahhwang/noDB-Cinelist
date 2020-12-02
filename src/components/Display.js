import React, {Component} from "react";
import Movies from "./Movies";
import MyList from "./MyList";
import axios from "axios";

class Display extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            myList: {
                rating: 0, 
                comments: "", 
                items: []
            }
        }

        this.addToMyList = this.addToMyList.bind(this);
        this.rateMovie = this.rateMovie.bind(this);
        this.commentMovie = this.commentMovie.bind(this);
        this.removeFromMyList = this.removeFromMyList.bind(this);
    }

    componentDidMount () {
        axios.get("/api/movies").then((res) => {
            this.setState ({
                movies: res.data,
            })
        })
    }

    addToMyList (id) {
        const body = {
            movie_id: id,
        }

        axios.post("/api/myList", body).then((res) => {
            this.setState ({
                myList: res.data,
            })
        })
    }

    rateMovie (id, rating) {
        const body = {
            rating: rating,
        }

        axios.put(`/api/myList/${id}`, body).then((res) => {
            this.setState ({
                myList: res.data,
            })
        })
    }

    commentMovie (id, comments) {
        const body = {
            comments: comments,
        }

        axios.put(`/api/myList/comments/${id}`, body).then((res) => {
            this.setState ({
                myList: res.data,
            })
        }).catch((e) => {
            console.log("Failed to comment");
        })
    }

    removeFromMyList (id) {
        axios.delete(`/api/myList/${id}`).then(res => {
            this.setState ({
                myList: res.data,
            })
        })
    }

    render () {
        return (
            <div className="display">
                <Movies addToMyList={this.addToMyList} movies={this.state.movies}/>
                <MyList
                    myList={this.state.myList}
                    removeFromMyList={this.removeFromMyList}
                    commentMovie={this.commentMovie}
                    rateMovie={this.rateMovie}
                />
            </div>
        )
    }
}
export default Display