import React from "react";
import Movie from "./Movie";

export default Movies = (props) => {
    const movieMap = props.movies.map((element) => {
        return (
            <Movie addToCart={props.addToCart} key={element.id} movie={element}/>
        )
    })

    return <div className="movies">{productMap}</div>
}