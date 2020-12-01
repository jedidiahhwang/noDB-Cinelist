import React, {Component} from "react";
import Movies from "./Movies";
import MyList from "./MyList";
import axios from "axios";

export default class Display extends Component {
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

    rateMovie (id, action) {
        axios.put(`/api/myList/${id}?action=${action}`).then((res) => {
            this.setState ({
                myList: res.data,
            })
        })
    }

    commentMovie (id, comments) {
        const body = {
            myList_id: id,
            comments: comments,
        }

        axios.put(`/api/myList/${id}`).then((res) => {
            this.setTate ({
                myList: res.data,
            })
        })
    }

    removeFromMyList (id) {
        axios.delete(`/api/myList`).then(res => {
            this.setState ({
                myList: res.data,
            })
        })
    }

    render () {
        return (
            <div className="display">
                <Movies 
                    addToMyList={this.addToMyList} 
                    movies={this.state.movies}
                />
                <MyList 
                    removeFromMyList={this.removeFromMyList} 
                    rateMovie={this.rateMovie} 
                    myList={this.state.myList}
                />
            </div>
        )
    }
}