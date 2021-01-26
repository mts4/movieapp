import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';
import {Text} from 'react-native-paper';
import usePreferences from '../../hooks/usePreferences';
import starDark from '../../assets/images/starDark.png';
import starLight from '../../assets/images/starLight.png';
const MovieRating = (props) => {
  const {voteCount, voteAverage} = props;
  const media = voteAverage / 2;
  const {theme} = usePreferences();
  return (
    <View style={styles.viewRating}>
      <Rating
        type="custom"
        ratingImage={theme === 'dark' ? starDark : starLight}
        ratingColor="#ffc205"
        ratingBackgroundColor={theme === 'dark' ? '#192734' : '#f0f0f0'}
        startingValue={media}
        imageSize={20}
      />
      <Text>{media}</Text>
      <Text>{voteCount} votos</Text>
    </View>
  );
};

export default MovieRating;

const styles = StyleSheet.create({
  viewRating: {
    marginHorizontal: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginRight: 15,
  },
  media: {
    fontSize: 16,
    marginRight: 5,
  },
  voteCount: {
    fontSize: 12,
    color: '#8697a5',
  },
});
