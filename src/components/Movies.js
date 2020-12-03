import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
    const movieMap = props.movies.map((element) => {
        return (
            <Movie 
                addToMyList={props.addToMyList} 
                key={element.id} 
                movie={element}
            />
        )
    })

    return <section className="movies">
                <h2 id="movies-header">Movie List</h2>
                {movieMap}
            </section>
}
export default Movies