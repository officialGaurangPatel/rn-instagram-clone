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
        active: "https://instagram.famd3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/253066681_1089534191820168_7805445554870843912_n.jpg?_nc_ht=instagram.famd3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=c803g8ezeGgAX-oCfz3&edm=ABfd0MgBAAAA&ccb=7-4&oh=a3d0691148e5f9c99b0ec74272d5c3e0&oe=619347AF&_nc_sid=7bff83",
        inactive: "https://instagram.famd3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/253066681_1089534191820168_7805445554870843912_n.jpg?_nc_ht=instagram.famd3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=c803g8ezeGgAX-oCfz3&edm=ABfd0MgBAAAA&ccb=7-4&oh=a3d0691148e5f9c99b0ec74272d5c3e0&oe=619347AF&_nc_sid=7bff83",
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: icon.inactive }} style={styles.icon} />
        </TouchableOpacity>
    )
    return (
        <View>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30
    }
})
export default BottomTabs
