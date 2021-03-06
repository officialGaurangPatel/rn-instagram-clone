import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LoginForm from '../Components/loginScreen/LoginForm'

const instagram_logo = "https://img.icons8.com/color/144/000000/instagram-new--v1.png"
const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.continer}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: instagram_logo, height: 100, width: 100 }} />
            </View>
            <LoginForm navigation={navigation} />
        </View>
    )
}

export default LoginScreen

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
