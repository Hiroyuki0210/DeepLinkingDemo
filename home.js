import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator}  from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Sample1 from './sample1'
import Sample2 from './sample2'


const sampleStack = createStackNavigator(
    {
        Sample1: {
            screen: Sample1,
            path: 'Sample1'
        },
        Sample2: {
            screen: Sample2,
            path: 'Sample2'
        }
    },
    {
        initialRouteName: 'Sample2'
    }
)


/*
const tabnavigator = createMaterialTopTabNavigator(
    {
        Sample1: {
            screen: Sample1,
            path: 'sample1'
        },
        Sample2: {
            screen: Sample2,
            path: 'sample2'
        }
    }
)

const stack = createStackNavigator(
    {
        Sa: {
            screen: tabnavigator,
            path: 'sa'
        }
        
    }

)
*/

export default sampleStack
