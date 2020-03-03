import React, {Component} from 'react';
import AppPage from '../pages/App';
import Profile from '../pages/Profile';
import Animated from '../pages/Animated';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';
import Selectors from '../redux/selectors';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

class Router extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const {spinStatus} = this.props;
    return (
      <>
        <Spinner visible={spinStatus} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Animated" component={Animated} />
            <Stack.Screen
              name="Home"
              component={AppPage}
              options={{title: 'Welcome'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    spinStatus: Selectors.getSpinStatus(state),
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
