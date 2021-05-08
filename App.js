import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Main from './src/screens/Main';
import { StatusBar } from 'expo-status-bar';
import { auth } from './firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator()

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })

      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }

  render() {
    const {loggedIn, loaded} = this.state;
    if(!loaded) {
      return(
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }

    if(!loggedIn) {
      return (
        <NavigationContainer>
          <StatusBar style='light'/>
          <Stack.Navigator>
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name ="Login" 
            component={Login}/>
            <Stack.Screen 
              options={{
                headerShown: false
              }}
              name ="Register" 
              component={Register}
              //options={{title: ''}}
              /> 
            
  
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return(
      <Provider store = {store}>
        <Main/>
      </Provider>
      
      
    )


    
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
