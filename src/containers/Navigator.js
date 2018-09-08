import {
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from 'src/containers/screens/HomeScreen';

export default createStackNavigator({
  Home: { screen: HomeScreen },
});
