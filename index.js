/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import axios from 'axios'
// import { REACT_APP_BASE_URL } from '@env'

AppRegistry.registerComponent(appName, () => App);
