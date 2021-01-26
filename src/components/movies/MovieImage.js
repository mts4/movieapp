import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {BASE_PATH_IMG} from '../../utils/constants';
const MovieImage = (props) => {
  const {posterPath} = props;
  return (
    <View style={styles.viewPoster}>
      <Image
        style={styles.poster}
        source={{uri: `${BASE_PATH_IMG}/w500${posterPath}`}}
      />
    </View>
  );
};

export default MovieImage;

const styles = StyleSheet.create({
  viewPoster: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    textShadowRadius: 10,
  },
  poster: {
    width: '100%',
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
