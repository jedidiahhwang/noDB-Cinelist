import React, {Component} from "react";

export default class Movie extends Component {
    constructor() {
        super();

    }

    handleAddToMyList() {
        this.props.addToMyList(this.props.movie.id)
    }

    
}