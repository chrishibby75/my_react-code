import React from "react";
import Movie from "../Movie/Movie";
import styles from "./MoviesList.module.css";

const MoviesList = props => {
    return (
        <ul className={styles["movies-list"]}>
            {props.movies.map(movie => (
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    openingText={movie.openingText}
                />
            ))}
        </ul>
    );
};

export default MoviesList;