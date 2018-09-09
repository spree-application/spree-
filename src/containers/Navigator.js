import {
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from 'src/containers/screens/HomeScreen';
import withDimensions from 'src/hocs/withDimensions';

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
});

export default withDimensions({
  roles: ['watcher']
})(Navigator);
