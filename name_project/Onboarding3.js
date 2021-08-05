/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Onboarding2 = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./img/Illustration2.png')} />
                <Text style={{ fontSize: 22, textAlign: 'center', lineHeight: 29, marginHorizontal: 14 }}>Food Ninja Is Where Your Comfort Food Lives</Text>
                <Text style={{ fontSize: 12, textAlign: 'center', lineHeight: 24, marginHorizontal: 65, marginTop: 20 }}>Enjoy a fast and smooth food delivery at your doorstep</Text>
            </View>
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['#53E88B', '#15BE77']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.linearButton}>
                    <TouchableOpacity style={styles.btnSearch}>
                        <Text style={styles.txtSearch}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    )
}

export default Onboarding2

const styles = StyleSheet.create({
    linearButton: {
        marginHorizontal: 109,
        height: 57,
        borderRadius: 15,
        marginTop: 76
    },
    btnSearch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    txtSearch: {
        color: '#FEFEFF',
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '700',
    },
})
