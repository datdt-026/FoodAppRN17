/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const SignIn = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./img/Logo.png')} />
            <LinearGradient colors={['#53E88B', '#15BE77']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Text style={{ fontSize: 40, lineHeight: 54, letterSpacing: 0.5, }}>Food Ninja</Text>
            </LinearGradient>
            <Text style={{ fontSize: 13, lineHeight: 16, letterSpacing: 1, fontWeight: '600' }}>Delivery Favorite Food</Text>


            <Text style={{ marginHorizontal: 80, marginTop: 40, fontSize: 20, lineHeight: 26.2 }}>Login To Your Account</Text>

            <TextInput
                style={styles.inputSearch}
                placeholder="Email"
                placeholderColor='rgba(9, 5, 28, 1)'
            />
            <TextInput
                style={styles.inputSearch}
                placeholder="Password"
                placeholderColor='rgba(9, 5, 28, 1)'
            />

        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    inputSearch: {
        fontSize: 12,
        lineHeight: 14,
        color: "rgba(218, 99, 23, 1)",
        borderColor: 'rgba(244, 244, 244, 1)'
    },
})
