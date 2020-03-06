import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View, Animated, Easing, Image,
    Button,
    TouchableOpacity, TextInput, SafeAreaView, FlatList, Vibration, ActivityIndicator, PermissionsAndroid, Linking
} from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator}  from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';



export default class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    render() {
        return <AppContainer uriPrefix={prefix} />;
    }
}
class WelcomeScreen extends Component {
    state = {
        fadeAnim: new Animated.Value(0.2),  // Initial value for opacity: 0
    }
    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,
                easing: Easing.back(),                  // Animate to opacity: 1 (opaque)
                duration: 1000,
                useNativeDriver: true           // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#000' }}>
                <Animated.View                 // Special animatable View
                    style={{ opacity: fadeAnim }}
                >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Dashboard")}
                        style={{
                            backgroundColor: "orange",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 30,
                            width: 100,
                            borderRadius: 10,
                            borderColor: "#ccc",
                            borderWidth: 2,
                            marginBottom: 10
                        }}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View                 // Special animatable View
                    style={{ opacity: fadeAnim }}
                >
                    <TouchableOpacity
                        onPress={() => alert("buttonPressed")}
                        style={{
                            backgroundColor: "orange",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 30,
                            width: 100,
                            borderRadius: 10,
                            borderColor: "#ccc",
                            borderWidth: 2
                        }}
                    >
                        <Text> Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

class Detail extends Component {
  render () {
    return (
      <Text>detail page</Text>
    )
  }
}

class Feed extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button
                    onPress={() => this.props.navigation.navigate("DetailsScreen")}
                    title="Go to details"
                />
            </View>
        );
    }
}
class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
            //Somecode
            </SafeAreaView>
        );
    }
}
class Settings extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            //Some code
            </View>
        );
    }
}
const feedStack = createStackNavigator({
    Feed: {
        screen: Feed,
        path: 'feed',
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Feed",
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        name="md-menu"
                        size={30}
                        onPress={() => navigation.openDrawer()}
                    />
                )
            };
        }
    },
    DetailsScreen: {
        screen: Detail,
        path: 'details',
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Details",
            };
        }
    }
});
const profileStack = createStackNavigator({
    Profile: {
        screen: Profile,
        path: 'profile',
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Profile",
                headerMode: 'Float',
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        name="md-menu"
                        size={30}
                        onPress={() => navigation.openDrawer()}
                    />
                )
            };
        }
    },
    DetailsScreen: {
        screen: Detail,
        path: 'details',
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Details"
            };
        }
    }
});
const settingStack = createStackNavigator({
    Settings: {
        screen: Settings,
        path: 'settings',
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Settings",
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        name="md-menu"
                        size={30}
                        onPress={() => navigation.openDrawer()}
                    />
                )
            };
        }
    },
    DetailsScreen: {
        screen: Detail,
        path: 'details',
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Details"
            };
        },

    }
});
const DashboardTabNavigator = createBottomTabNavigator(
    {
        feedStack: {
            screen: feedStack,
            path: 'feedStack',
            navigationOptions: ({ navigation }) => {
                let tabBarVisible = true;
                if (navigation.state.index > 0) {
                    tabBarVisible = false;
                }
                return {
                    tabBarLabel: "Feed",
                    tabBarVisible,
                    //iconName :`ios-list${focused ? '' : '-outline'}`,
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="ios-list" color={tintColor} size={25} />
                    )
                };
            }
        },

        profileStack: {
            screen: profileStack,
            path: 'profileStack',
            navigationOptions: ({ navigation, focused }) => {
                let tabBarVisible = true;
                if (navigation.state.index > 0) {
                    tabBarVisible = false
                }
                return {
                    tabBarVisible,
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="ios-man" color={tintColor} size={25} />
                    )
                };
                // focused:true,
            }
        },
        settingStack: {
            screen: settingStack,
            path: 'settingsStack',
            navigationOptions: ({ navigation }) => {
                let tabBarVisible = true;
                if (navigation.state.index > 0) {
                    tabBarVisible = false;
                }
                return {
                    tabBarVisible,
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="ios-options" color={tintColor} size={25} />
                    )
                }

            }
        },

    },
    {
        navigationOptions: ({ navigation }) => {

            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                // headerTitle: routeName,

                header: null
            };
        },
        tabBarOptions: {
            //showLabel: true, // hide labels
            activeTintColor: "orange", // active icon color
            inactiveTintColor: "#586589" // inactive icon color
            //activeBackgroundColor:'#32a1fe',
        }
    }
);
const DashboardStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: {
            screen: DashboardTabNavigator,
            path: 'dashboardtabs'
        },
        DetailsScreen: {
            screen: Detail,
            path: 'details',
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: "Details"
                };
            }
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        name="md-menu"
                        size={30}
                        onPress={() => navigation.openDrawer()}
                    />
                )
            };
        }
    }
);
/*
const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator,
        path: 'welcome'
    },
    DetailsScreen: {
        screen: Detail,
        path: 'friends',
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Details",

            };
        }
    }
});
*/

//Switch navigator , will be first to load
const AppSwitchNavigator = createSwitchNavigator({
    Welcome: {
        screen: WelcomeScreen,

    },
    /*
    Dashboard: {
        screen: AppDrawerNavigator,
        path: 'welcome'
    }
    */
});
const prefix = 'myapp://';
const AppContainer = createAppContainer(AppSwitchNavigator);
