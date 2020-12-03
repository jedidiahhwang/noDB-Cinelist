import React, {Component} from "react";

class MyListItem extends Component {
    constructor() {
        super();

        this.state = {
            ratingInput: "",
            commentsInput: "",
        }
        
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
    }

    submitComment() {
        this.props.commentMovie(this.props.item.myList_id, this.state.commentsInput);

        this.setState ({
            commentsInput: "",
        });
    }

    submitRating() {
        this.props.rateMovie(this.props.item.myList_id, this.state.ratingInput);

        this.setState ({
            ratingInput: "",
        })
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
            <section className="myListMovie">
                <img
                    className="myListMovie-image"
                    src={this.props.item.image}
                    onClick={() => this.props.removeFromMyList(this.props.item.myList_id)}
                />
                <p className="myListMovie-header">{this.props.item.title}</p>
                <p className="myListMovie-header">Directed by: {this.props.item.director}</p>
                <p className="myListMovie-header">Rating: {this.props.item.rating}/10</p>
                <input
                    id="rating-input"
                    placeholder="Enter Rating"
                    value={this.state.ratingInput}
                    onChange={(e) => this.handleRatingChange(e.target.value)}
                />
                <button 
                    id="rating-submit"
                    onClick={() => this.submitRating()}
                >
                    Submit Rating
                </button>
                <p className="myListMovie-header">Comments: {this.props.item.comments}</p>
                <input
                    id="comments-input"
                    placeholder="Enter Comments"
                    value={this.state.commentsInput}
                    onChange={(e) => this.handleCommentsChange(e.target.value)}
                />
                <button
                    id="comments-submit"
                    onClick={() => this.submitComment()}
                >
                    Submit Comments
                </button>
            </section>
        )
    }
}
export default MyListItem