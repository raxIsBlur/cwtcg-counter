import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import CounterScreen from '../screens/CounterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  counter: () => CounterScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
