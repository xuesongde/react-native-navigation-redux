import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Button, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import Selectors from '../redux/selectors';
import * as Actions from '../redux/actions';
import NativeBridge from './nativeBridge/index';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshKey: 'some key',
    };
  }
  componentWillMount() {
    console.log('componentWillMount....');
    const { getComment } = this.props;
    // getComment('abc');
  }
  getRealTimeLocation = () => {
    console.log('getRealTimeLocation...');
    const { ToastExample } = NativeBridge;
    ToastExample.show('Awesome', ToastExample.SHORT);
  };
  render() {
    const { userComment, getComment } = this.props;
    const { refreshKey } = this.state;
    return (
      <ScrollView>
        <View style={styles.buttonView}>
          <Button
            style={styles.translateBtn}
            onPress={() => {
              console.log('do something...');
              getComment('aaa');
            }}
            title="do something"
          />
          <Button style={{ marginTop: 30 }} onPress={this.getRealTimeLocation} title="get real time location" />
        </View>
        <View style={styles.containerList} key={refreshKey}>
          <FlatList data={userComment} renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userComment: Selectors.getUserComment(state),
    personInfo: Selectors.getPersonInfo(state),
  };
};
const mapDispatchToProps = dispatch => ({
  getComment: payload => {
    return dispatch({
      type: Actions.GET_COMMENTS_REQUEST,
      payload,
    });
  },
  setSpinstate: payload => {
    return dispatch({
      type: Actions.GET_GLOBAL_SPIN_STATE,
      payload,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  locationBtn: {
    marginTop: 20,
    backgroundColor: 'green',
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
