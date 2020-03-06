import React from 'react';
import { Text } from 'react-native';

const num = {
    1: 'yoyo'
}

class SubTest extends React.Component {
    static navigationOptions = {
        title: 'SubTest',
      };

    render() {
    return <Text>Suuuuuuuubtest page</Text>
    }
}

export default SubTest;