/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Payment = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
                <Text style={{ fontSize: 25, lineHeight: 33, fontWeight: '400', marginTop: 103, marginRight: 80 }}>Payment Method</Text>
                <Text style={{ fontSize: 12, lineHeight: 22, fontWeight: '400', marginRight: 80 }}>This data will be displayed in your account profile for security</Text>
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity>
                    <Image source={require('./img/Paypal_Button.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./img/Visa_Button.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./img/Payoneer_Button.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />
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

    )
}

export default Payment

const styles = StyleSheet.create({
    linearButton: {
        marginHorizontal: 25,
        height: 57,
        borderRadius: 15,
        marginBottom: 16,
        width: 157
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
