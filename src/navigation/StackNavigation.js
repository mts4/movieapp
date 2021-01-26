import React from 'react';
import {IconButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';

const Stack = createStackNavigator();

const StackNavigation = (props) => {
  const {navigation} = props;
  const buttonMenu = (screen) => {
    switch (screen) {
      case 'search':
      case 'movie':
        return (
          <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
        );
      default:
        return (
          <IconButton icon="menu" onPress={() => navigation.openDrawer()} />
        );
    }
  };

  const buttonSearch = () => {
    return (
      <IconButton
        icon="magnify"
        onPress={() => navigation.navigate('search')}
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Cinema Dev',
          headerLeft: () => buttonMenu('home'),
          headerRight: () => buttonSearch(),
        }}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{
          title: '',
          headerTransparent: 'true',
          headerLeft: () => buttonMenu('movie'),
          headerRight: () => buttonSearch(),
        }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{
          title: 'Nuevas Peliculas',
          headerLeft: () => buttonMenu('news'),
          headerRight: () => buttonSearch(),
        }}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{
          title: 'Peliculas Populares',
          headerLeft: () => buttonMenu('popular'),
          headerRight: () => buttonSearch(),
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          title: '',
          headerTransparent: true,
          headerLeft: () => buttonMenu('search'),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
