import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';
import {size, map} from 'lodash';
import {searchMovieApi} from '../api/movie';
import {BASE_PATH_IMG} from '../utils/constants';

const {width} = Dimensions.get('window');

const Search = (props) => {
  const {navigation} = props;
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (size(search) > 2) {
      searchMovieApi(search).then((response) => {
        setMovies(response.results);
      });
    }
  }, [search]);

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Busca tu película"
        iconColor={Platform.OS === 'ios' && 'transparent'}
        icon="arrow-left"
        style={styles.input}
        onChangeText={(e) => setSearch(e)}
      />
      <ScrollView>
        <View style={styles.container}>
          {map(movies, (movie, index) => (
            <Movie key={index} movie={movie} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

function Movie(props) {
  const {movie, navigation} = props;
  const {id, title, poster_path} = movie;
  const goMovie = () => {
    navigation.navigate('movie', {id});
  };
  return (
    <TouchableWithoutFeedback onPress={goMovie}>
      <View style={styles.movie}>
        {poster_path ? (
          <Image
            style={styles.image}
            source={{uri: `${BASE_PATH_IMG}/w500${poster_path}`}}
          />
        ) : (
          <Text>{title}</Text>
        )}
        <Image
          style={styles.image}
          source={{uri: `${BASE_PATH_IMG}/w500${poster_path}`}}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: -3,
    backgroundColor: '#15212b',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  movie: {
    width: width / 2,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
