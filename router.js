import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import Home from './home';
import People from './people';
import Test from './test';
import Sample1 from './sample1'
import Sample2 from './sample2'

const homeStack = createStackNavigator(
  {
    Home: { 
      screen: Home,
      path: 'home'
     },
    //People: { screen: People },
  }
);

const testStack = createStackNavigator(
  {
    Test: { 
      screen: Test,
      path:'test'
    },
  }
)

const tab = createBottomTabNavigator(
  {
    Home: createStackNavigator({
      Home: { 
        screen: createStackNavigator({
          Sample1: {
            screen: Sample1,
            path: 'sample1'
          }
        }),
        path: 'home'
      }
    }),
    Test: testStack
  }
)

/*
const tab = createBottomTabNavigator(
  {
    Home: homeStack,
    Test: testStack
  }
)
*/

const AppStack = createStackNavigator(
  {
    Tabs: {
      screen: tab,
      path: 'tabs'
    }
    
  }

)

const AppContainer = createAppContainer(AppStack)

/*
const getActiveRouteName = state => {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
};
*/

export default function App() {
  return (
    <AppContainer 
        uriPrefix="urlsample://"
    />
  );
}
