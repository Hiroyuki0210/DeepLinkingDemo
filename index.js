/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './router';
import {name as appName} from './app.json';
import App from './App';


AppRegistry.registerComponent(appName, () => Router);
