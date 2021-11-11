import React from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginForm = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputFields}>
                <TextInput
                    style={{ outline: 'none' }}
                    placeholderTextColor='#444'
                    placeholder='Phone Number, Email or UserName'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType="emailAddress"
                    autoFocus={true}
                />
            </View>
            <View style={styles.inputFields}>
                <TextInput
                    style={{ outline: 'none' }}
                    placeholderTextColor='#444'
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType="password"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
            </TouchableOpacity>
            <Pressable
                titleSize={20} style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signupContainer}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                    <Text style={{ color: '#6BB0F5' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80
    },
    inputFields: {
        outline: 'none',
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1
    },
    button: {
        backgroundColor: '#0096f6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4
    },
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    }
})
