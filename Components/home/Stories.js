import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../data/users'
const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsVerticalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center', cursor: 'pointer' }}>
                        <Image source={{ uri: story.image }} style={styles.story} />
                        <Text style={{ color: 'white' }}>{story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'
    }
})

export default Stories
