import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: {
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      },
      text: '',
      showPizza: false,
    };
  }
  render() {
    const {pic, showPizza} = this.state;
    return (
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Hello, world!</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image source={pic} style={{width: 198, height: 110, flex: 1}} />
        </View>
        <View
          onPress={() => {
            this.setState(state => {
              return {
                showPizza: !state.showPizza,
              };
            });
          }}
          clickable
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image source={pic} style={{width: 198, height: 110, flex: 1}} />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Type here to translate!"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Button
            style={styles.translateBtn}
            onPress={() => {
              Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                  {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed'),
                  },
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
              this.setState(state => {
                return {
                  showPizza: !state.showPizza,
                };
              });
            }}
            title="show translate"
          />
        </View>
        {showPizza && (
          <View>
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text
                .split(' ')
                .map(word => word && '🍕')
                .join(' ')}
            </Text>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <View style={{backgroundColor: 'red', flex: 0.5}} />
          <Button
            style={styles.translateBtn}
            onPress={() => {
              const {navigation} = this.props;
              navigation.navigate('Profile');
            }}
            title="navigate to profile"
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'stretch',
  },
  input: {
    flex: 1,
    borderColor: 'black',
  },
  translateBtn: {
    flexBasis: 200,
  },
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
