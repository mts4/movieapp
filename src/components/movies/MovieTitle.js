import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {map} from 'lodash';
const MovieTitle = (props) => {
  const {movie} = props;
  return (
    <View style={styles.viewInfo}>
      <Title>{movie.title}</Title>
      <View style={styles.viewGenres}>
        {map(movie.genres, (genre) => (
          <Text key={genre.id} style={styles.genre}>
            {genre.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default MovieTitle;

const styles = StyleSheet.create({
  viewInfo: {
    marginHorizontal: 30,
  },
  viewGenres: {
    flexDirection: 'row',
  },
  genre: {
    marginRight: 20,
    color: '#8697a5',
  },
});
