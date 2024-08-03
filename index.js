/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from './App';
import {name as appName} from './app.json';
import SubjectsScreen from './src/screens/SubjectsScreen';
import LevelsScreen from './src/screens/LevelsScreen';

Navigation.registerComponent('Subjects', () => SubjectsScreen);
Navigation.registerComponent('SubjectLevels', () => LevelsScreen);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Subjects'
              }
            }
          ]
        }
      }
    });
  });

  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: '#4d089a'
    },
    topBar: {
      title: {
        color: 'white'
      },
      backButton: {
        color: 'white'
      },
      background: {
        color: '#4d089a'
      }
    }
  });
  

AppRegistry.registerComponent(appName, () => App);
