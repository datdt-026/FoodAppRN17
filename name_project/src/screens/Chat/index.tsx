import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Chat = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 16}}>
        <View
          style={{
            backgroundColor: 'white',
            width: 347,
            height: 103,
            borderRadius: 30,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/profile1.png')}
            style={{marginLeft: 16}}
          />
          <View style={{marginLeft: 16}}>
            <Text
              style={{
                color: '#09051C',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 19.6,
                flexDirection: 'row',
              }}>
              Anamwp
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#3B3B3B',
                  opacity: 0.3,
                }}>
                Your Order Just Arrived!
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            width: 347,
            height: 103,
            borderRadius: 30,
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 16,
          }}>
          <Image
            source={require('../../assets/profile2.png')}
            style={{marginLeft: 16}}
          />
          <View style={{marginLeft: 16}}>
            <Text
              style={{
                color: '#09051C',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 19.6,
                flexDirection: 'row',
              }}>
              Guy Hawkins
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#3B3B3B',
                  opacity: 0.3,
                }}>
                Your Order Just Arrived!
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            width: 347,
            height: 103,
            borderRadius: 30,
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 16,
          }}>
          <Image
            source={require('../../assets/profile3.png')}
            style={{marginLeft: 16}}
          />
          <View style={{marginLeft: 16}}>
            <Text
              style={{
                color: '#09051C',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 19.6,
                flexDirection: 'row',
              }}>
              Leslie Alexander
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#3B3B3B',
                  opacity: 0.3,
                }}>
                Your Order Just Arrived!
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
