import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignupScreen = () => {
    return (
        <View>
            <View style={styles.continer}>
                <View style={styles.logoContainer}>
                    <Image source={{ uri: instagram_logo, height: 100, width: 100 }} />
                </View>
                <SignupForm navigation={navigation} />
            </View>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
