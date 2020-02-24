import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Selectors from '../redux/selectors';
import * as Actions from '../redux/actions';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {getComment} = this.props;
    getComment('abc');
  }
  render() {
    const {userComment} = this.props;
    return (
      <ScrollView>
        <View style={styles.containerList}>
          <FlatList
            data={userComment}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
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
});
