import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'

const Header = () => {
    return (
        <View>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    logo:{
        height:100,
        width:150,
        }
})

export default Header
