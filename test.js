import React from 'react';
import { Text } from 'react-native';
import SubTest from './subTest';
import { createStackNavigator } from 'react-navigation-stack'

const num = {
    1: 'yoyo'
}

const subTestStack = createStackNavigator(
    {
        SubTest: { 
            screen: SubTest,
        },
    }
  )

class Test extends React.Component {
    static navigationOptions = {
        title: 'Test',
      };

    render() {
        return <Text>test page</Text>
    }
}

export default Test;