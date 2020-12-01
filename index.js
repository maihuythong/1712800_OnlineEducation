/**
 * @format
 * ref: https://stackoverflow.com/questions/60233749/how-to-enable-the-new-logbox-rn
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name } from './app.json';
LogBox.ignoreLogs(['VirtualizedLists']);
LogBox.ignoreLogs(['Require cycle']);
LogBox.ignoreLogs(['Trying to load ']);
AppRegistry.registerComponent(name, () => App);
