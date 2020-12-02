import React, {Component} from "react";

class Movie extends Component {
    constructor() {
        super();
    }

    handleAddToMyList() {
        this.props.addToMyList(this.props.movie.id)
    }

    render () {
        return (
            <div className="movie">
                <img
                    className="movie-image"
                    src={this.props.movie.image}
                    onClick={() => this.handleAddToMyList()}
                />
                <p className="movies-title">{this.props.movie.title}</p>
            </div>
        )
    }
}
export default Movie