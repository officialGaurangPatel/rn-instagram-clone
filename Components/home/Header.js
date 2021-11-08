import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </TouchableOpacity>


            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png" }} style={styles.icon}></Image>
                </TouchableOpacity>
                <Text style={{ color: 'white' }}>Dummy</Text>
                <Text style={{ color: 'white' }}>Dummy</Text>
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
        color: 'white',
        height: 30,
        width: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    }

})

export default Header
