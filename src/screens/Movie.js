import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import ModalVideo from '../components/ModalVideo';
import {getMovieByIdApi} from '../api/movie';

import MovieImage from '../components/movies/MovieImage';
import MovieTrailer from '../components/movies/MovieTrailer';
import MovieTitle from '../components/movies/MovieTitle';
import MovieRating from '../components/movies/MovieRating';
import MovieInfo from '../components/movies/MovieInfo';

const Movie = (props) => {
  const {route} = props;
  const {id} = route.params;
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    getMovieByIdApi(id).then((response) => {
      setMovie(response);
    });
  }, [id]);

  if (!movie) {
    return null;
  }

  return (
    <>
      <ScrollView>
        <MovieImage posterPath={movie.poster_path} />
        <MovieTrailer setShowVideo={setShowVideo} />
        <MovieTitle movie={movie} />
        <MovieRating
          voteCount={movie.vote_count}
          voteAverage={movie.vote_average}
        />
        <MovieInfo movie={movie} />
      </ScrollView>
      <ModalVideo show={showVideo} setShow={setShowVideo} idMovie={id} />
    </>
  );
};

export default Movie;
