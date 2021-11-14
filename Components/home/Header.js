import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </TouchableOpacity>


            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Image source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png" }} style={styles.icon}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png" }} style={styles.icon}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png" }} style={styles.icon}></Image>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    logo: {
        height: 100,
        width: 150,
        resizeMode: 'contain',
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    icon: {
        height: 30,
        width: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge: {
        backgroundColor: "#FF3250",
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }

})

export default Header
