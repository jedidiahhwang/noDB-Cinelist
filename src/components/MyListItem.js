import React, {Component} from "react";

class MyListItem extends Component {
    constructor() {
        super();

        this.state = {
            ratingInput: 0,
            commentsInput: "",
        }
        
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
    }

    handleRatingChange(userInput) {
        this.setState ({
            ratingInput: userInput,
        })
    }

    handleCommentsChange(userInput) {
        this.setState ({
            commentsInput: userInput,
        })
    }


    render () {
        return (
            <div className="myListMovie">
                <img
                    className="myListMovie-image"
                    src={this.props.item.image}
                    onClick={() => this.props.removeFromMyList(this.props.item.myList_id)}
                />
                <p className="myListMovie-header">{this.props.item.title}</p>
                <p className="myListMovie-header">Directed by: {this.props.item.director}</p>
                <p className="myListMovie-header">Rating: </p>
                <input
                    id="rating-input"
                    placeholder="Enter Rating"
                    value={this.state.ratingInput}
                    onChange={(e) => this.handleRatingChange(e.target.value)}
                />
                <button 
                    id="rating-submit"
                    onClick={() => this.props.rateMovie(this.props.item.myList_id, this.state.ratingInput)}
                >
                    Submit Rating
                </button>
                <p className="myListMovie-header">Comments: </p>
                <input
                    id="comments-input"
                    placeholder="Enter Comments"
                    value={this.state.commentsInput}
                    onChange={(e) => this.handleCommentsChange(e.target.value)}
                />
                <button
                    id="comments-submit"
                    onClick={() => this.props.commentMovie(this.props.item.myList_id, this.state.commentsInput)}
                >
                    Submit Comments
                </button>
            </div>
        )
    }
}
export default MyListItem