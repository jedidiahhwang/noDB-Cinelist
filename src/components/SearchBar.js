import React, {Component} from "react";

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            filterInput: "",
        }
    }

    handleChange(userInput) {
        this.setState ({
            filterInput: userInput,
        })
    }

    render() {
        return (
            <header className="filteredMovies">
                <input
                    id="filter-input"
                    placeholder="Enter Title"
                    value={this.state.filterInput}
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <button id="search-button" onClick={() => this.props.filterMovies(this.state.filterInput, "filter")}>Filter</button>
                <button id="clear-button" onClick={() => this.props.clearMovies()}>Clear</button>
            </header>
        )
    }

}
export default SearchBar