/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Onboarding1 = () => {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Image source={require('./img/Logo.png')} />
            <LinearGradient colors={['#53E88B', '#15BE77']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Text style={{ fontSize: 40, lineHeight: 54, letterSpacing: 0.5, }}>Food Ninja</Text>
            </LinearGradient>
            <Text style={{ fontSize: 13, lineHeight: 16, letterSpacing: 1, fontWeight: '600' }}>Delivery Favorite Food</Text>
        </View>

    )
}

export default Onboarding1

const styles = StyleSheet.create({})

