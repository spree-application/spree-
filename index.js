import {
  AppRegistry,
  YellowBox
} from 'react-native';
import App from 'src/containers/AppRoot';
import { name as appName } from 'src/static/appConfig.json';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent(appName, () => App);
