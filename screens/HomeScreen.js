import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { POSTS } from '../Components/data/posts';
import BottomTabs from '../Components/home/BottomTabs';

import Header from '../Components/home/Header'
import Post from '../Components/home/Post'
import Stories from '../Components/home/Stories'

const HomeScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Header />
                <Stories />
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        {POSTS.map((post, index) => (
                            <Post key={index} post={post} />
                        ))
                        }
                    </View>
                </ScrollView>
                <BottomTabs />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})

export default HomeScreen
