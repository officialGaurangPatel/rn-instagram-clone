import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import SignupForm from '../Components/signupScreen/SignupForm'

const instagram_logo = "https://img.icons8.com/color/144/000000/instagram-new--v1.png"
const SignupScreen = ({ navigation }) => {
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

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})
