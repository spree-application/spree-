import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import compose from 'recompact/compose';
import lifecycle from 'recompact/lifecycle';
import setDisplayName from 'recompact/setDisplayName';
import { getDimensions } from 'src/redux/ducks/common/selectors';
import { setDimensions } from 'src/redux/ducks/common/actions';

const withDimensions = ({ roles } = { roles: ['provider'] }) => Component => compose(
  connect(
    roles.includes('provider')
      ? state => (
        {
          window: getDimensions(state)
        }
      )
      : null,
    { setDimensions }
  ),
  lifecycle({
    componentDidMount() {
      if (roles.includes('watcher') && !withDimensions.watcher) {
        withDimensions.watcher = Dimensions.addEventListener('change', ({ window }) => this.props.setDimensions(window));
      }
    },
    componentWillUnmount() {
      if (withDimensions.watcher) {
        Dimensions.removeEventListener('change', withDimensions.watcher);
      }
    }
  }),
  setDisplayName(`${Component.name}<-withDimensions`)
)(Component);

export default withDimensions;
