/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../config/Color';
import * as IconlyPack from 'react-native-iconly';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import CartScreen from '../screens/Cart';
import ChatScreen from '../screens/Chat';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();
const widthScreen = Dimensions.get('window').width;

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.primary5,
      }}
      tabBar={MyTab}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <IconlyPack.Home set="bold" color={color} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => {
            <IconlyPack.User set="bold" color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => {
            <IconlyPack.Buy set="bold" color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color}) => {
            <IconlyPack.Chat set="bold" color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MyTab = ({state, inactiveTintColor, activeTintColor, navigation}) => {
  let routeNames = state.routeNames;
  let currentIndex = state.index;
  const renderContent = (item, color) => {
    switch (item) {
      case 'Home':
        return <IconlyPack.Home set="bold" color={color} key={item} />;
      case 'Profile':
        return <IconlyPack.User set="bold" color={color} key={item} />;
      case 'Cart':
        return (
          <View>
            <IconlyPack.Buy set="bold" color={color} key={item} />
            <View style={styles.badge}>
              <Text style={styles.txtNumberCart}>7</Text>
            </View>
          </View>
        );
      case 'Chat':
        return (
          <View>
            <IconlyPack.Chat set="bold" color={color} key={item} />
            <View style={styles.badge} />
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.containerTab}>
      {routeNames.map((item, index) => {
        let color =
          currentIndex === index ? activeTintColor : inactiveTintColor;
        return (
          <TouchableOpacity
            style={styles.btnTab}
            onPress={() => navigation.navigate(item)}>
            {renderContent(item, color)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  btnTab: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTab: {
    width: widthScreen - 32,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: getBottomSpace() ? getBottomSpace() + 10 : 16,
    left: 16,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 22,
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 7,
    minHeight: 14,
    minWidth: 14,
    alignItems: 'center',
    justifyContent: 'center',
    top: -3,
    right: -5,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  txtNumberCart: {
    fontSize: 9,
    lineHeight: 12,
    color: '#FFF',
  },
});
