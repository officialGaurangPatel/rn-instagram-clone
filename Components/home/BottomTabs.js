import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabsIcons = [
    {
        name: 'Home',
        inactive: "https://img.icons8.com/fluency-systems-regular/24/ffffff/home--v2.png",
        active: "https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png"
    },
    {
        name: 'Search',
        active: "https://img.icons8.com/ios-filled/48/ffffff/search--v1.png",
        inactive: "https://img.icons8.com/ios/24/ffffff/search--v2.png",
    },
    {
        name: 'Reels',
        active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
        inactive: "https://img.icons8.com/ios/50/ffffff/instagram-reel.png",
    },
    {
        name: 'Shop',
        inactive: "https://img.icons8.com/fluency-systems-regular/24/ffffff/shop--v2.png",
        active: "https://img.icons8.com/fluency-systems-filled/48/ffffff/shop.png",
    },
    {
        name: 'Profile',
        active: "https://img.icons8.com/ios-filled/50/ffffff/user--v1.png",
        inactive: "https://img.icons8.com/ios/50/ffffff/user--v1.png",
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
                style={[styles.icon,
                icon.name === 'Profile' ? {
                    borderRadius: 50,
                    borderWidth: activeTab === 'Profile' ? 2 : 0,
                    borderColor: '#fff'
                } : null,
                ]} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <Divider width={5} orientation='vertical' color='white' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '2%',
        zIndex: 999,
        backgroundColor: '#000'
    },
    icon: {
        height: 30,
        width: 30
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
})
export default BottomTabs
