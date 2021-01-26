import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
const MovieInfo = (props) => {
  const {movie} = props;
  const {overview, release_date} = movie;
  return (
    <>
      <Text style={styles.overview}>{overview}</Text>
      <Text style={styles.overview}>Fecha de lanzamiento: {release_date}</Text>
    </>
  );
};

export default MovieInfo;

const styles = StyleSheet.create({
  overview: {
    marginHorizontal: 30,
    marginTop: 20,
    textAlign: 'justify',
    color: '#8697a5',
  },
  date: {
    marginBottom: 30,
  },
});
