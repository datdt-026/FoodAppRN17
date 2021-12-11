import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import Food from './Food';

const witdh = Dimensions.get('window').width;

const Profile = () => {
  return (
    <ScrollView>
      <View>
        <Image
          style={{width: witdh}}
          source={require('../../assets/profile.png')}
        />
      </View>

      <View
        style={{
          marginTop: 16,
          backgroundColor: '#FEF6ED',
          width: 111,
          height: 34,
          borderRadius: 30,
          marginLeft: 21,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#FEAD1D',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Member Gold
        </Text>
      </View>

      <View
        style={{
          marginLeft: 21,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 27,
            fontWeight: '700',
            lineHeight: 35,
            fontStyle: 'normal',
          }}>
          Anam Wusono
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/ic_edit.png')}
            style={{marginRight: 32}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: 21}}>
        <Text style={{opacity: 0.3}}>anamwp66@gmail.com </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 24,
          marginLeft: 21,
          backgroundColor: 'white',
          borderRadius: 30,
          height: 64,
          width: 347,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/ic_voucher.png')} />
        <Text
          style={{
            fontSize: 15,
            lineHeight: 19.95,
            fontStyle: 'normal',
          }}>
          You have 3 vouchers
        </Text>
      </View>

      <Text
        style={{
          marginLeft: 21,
          fontSize: 15,
          lineHeight: 19.65,
          fontWeight: '700',
          marginTop: 16,
        }}>
        Favourtie
      </Text>

      <Food />
      <Food />
      <Food />
      <Food />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
