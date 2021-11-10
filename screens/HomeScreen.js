import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { POSTS } from '../Components/data/posts';
import BottomTabs, { bottomTabsIcons } from '../Components/home/BottomTabs';

import Header from '../Components/home/Header'
import Post from '../Components/home/Post'
import Stories from '../Components/home/Stories'

const HomeScreen = () => {
    return (
        // <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post key={index} post={post} />
                ))
                }
            </ScrollView>
            <BottomTabs icons={bottomTabsIcons} />
        </SafeAreaView>
        // </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})

export default HomeScreen
