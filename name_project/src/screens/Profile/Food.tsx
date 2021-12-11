import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

const Food = () => {
  return (
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
          source={require('../../assets/Spicy.png')}
          style={{marginLeft: 16}}
        />
        <View style={{marginLeft: 16}}>
          <Text
            style={{
              color: '#09051C',
              fontSize: 15,
              fontWeight: '400',
              lineHeight: 19.6,
            }}>
            Spacy fresh crab
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
              Waroenk kita
            </Text>
            <TouchableOpacity style={{marginLeft: 70}}>
              <Image source={require('../../assets/buy_again.png')} />
            </TouchableOpacity>
          </View>

          <Text>$35</Text>
        </View>
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({});
