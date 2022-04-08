import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text } from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import { Accounts } from './screens/Accounts';
import { Transactions } from './screens/Transactions';
import { Categories } from './screens/Categories';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';

import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Login } from './screens/auth/Login';
import { Register } from './screens/auth/Register';
import { Feedback } from './components/layout/Feedback';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const renderDrawerIcon = (focused, Icon, name) => (
  <Icon
      name={name}
      size={focused ? 25 : 20}
      // color={focused ? '#8bcbf9' : '#999999'}
      color={focused ? '#8bcbf9' : '#fff'}
  />
)


const LINKS_NOT_LOGGED = [
  {
    name: 'Login',
    component: Login,
    title: 'Login',
    icon: {
      provider: FontAwesome,
      name: 'login'
    }
  },
  {
    name: 'Register',
    component: Register,
    title: 'Register',
    icon: {
      provider: FontAwesome,
      name: 'Register'
    }
  },
]
const LINKS = [
  {
    name: 'Accounts',
    component: Accounts,
    title: 'Accounts',
    icon: {
      provider: FontAwesome,
      name: 'bank'
    }
  },
  {
    name: 'Categories',
    component: Categories,
    title: 'Categories',
    icon: {
      provider: MaterialIcons,
      name: 'category'
    }
  },
  {
    name: 'Transactions',
    component: Transactions,
    title: 'Transactions',
    icon: {
      provider: FontAwesome5,
      name: 'tenge'
    }
  },
  {
    name: 'Profile',
    component: Profile,
    title: 'Profile',
    icon: {
      provider: FontAwesome5,
      name: 'user-circle'
    }
  },
  {
    name: 'Settings',
    component: Settings,
    title: 'Settings',
    icon: {
      provider: MaterialIcons,
      name: 'settings'
    }
  },
]

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Feedback />
      {!loggedIn 
      ?
      // <Login onPress={() => setLoggedIn(true)}/>
        <Stack.Navigator
          initialRouteName="Login"
          hideStatusBar={false}
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#24292f',
              width: 250,
            },
            headerShown: false,
          }}
        >
          {LINKS_NOT_LOGGED.map(link => (
            <Stack.Screen 
              key={link.name}
              name={link.name} 
              component={link.component} 
              options={{
                // title: link.title,
                drawerIcon: ({ focused }) => renderDrawerIcon(focused, link.icon.provider, link.icon.name),
                // drawerActiveTintColor: 'red'
              }}
          />
          ))}
        </Stack.Navigator>
      :
        <Drawer.Navigator
          initialRouteName="Transactions"
          drawerPosition='left'
          drawerType="front"
          edgeWidth={100}
          hideStatusBar={false}
          overlayColor='red'
          // drawerStyle={{
          //   backgroundColor: '#e6e6',
          //   width: 250
          // }}
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#24292f',
              width: 250,
            },
            // drawerActiveBackgroundColor: '#24292f',  // 
            // drawerActiveTintColor: 'red',
            drawerLabelStyle: {  // EACH LABEL STYLES
              color: '#fff',
              fontSize: 18,
              fontWeight: '600'
            },
            headerTitleStyle: {  // HEADER LABEL STYLES
              color: '#fff',
              fontWeight: '600',
            },
            headerTintColor: '#fff',  // ICON COLOR IN HEADER
            // drawerLabel: 'Test',
            headerShown: true,
            swipeEnabled: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#24292f',
            },
          }}
        >
          {LINKS.map(link => (
            <Drawer.Screen 
              key={link.name}
              name={link.name} 
              component={link.component} 
              options={{
                // title: link.title,
                drawerIcon: ({ focused }) => renderDrawerIcon(focused, link.icon.provider, link.icon.name),
                // drawerActiveTintColor: 'red'
              }}
          />
          ))}
        </Drawer.Navigator>
      }
    </NavigationContainer>

    </Provider>
  );
};

export default App;
