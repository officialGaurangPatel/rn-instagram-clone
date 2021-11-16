import React from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignUpFormSchema = Yup.object().shape({
    userName: Yup.string().required().min(2, 'A username is required'),
    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(6, 'Your Password has to have at least 8 characters')
})
const SignupForm = ({ navigation }) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', userName: '' }}
            onSubmit={(values) => {
                console.log(values)
                navigation.push('HomeScreen')
            }}
            validationSchema={SignUpFormSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, isValid }) =>
                <>
                    <View style={styles.wrapper}>
                        <View style={[styles.inputFields,
                        { borderColor: 1 > values.userName.length || values.userName.length >= 3 ? 'ccc' : 'red' }]}>
                            <TextInput
                                style={{ outline: 'none' }}
                                placeholderTextColor='#444'
                                placeholder='UserName'
                                autoCapitalize='none'
                                textContentType="userName"
                                onChangeText={handleChange('userName')}
                                onBlur={handleBlur('userName')}
                                value={values.userName}
                            />
                        </View>
                        <View style={[styles.inputFields,
                        { borderColor: values.email.length < 1 || Validator.validate(values.email) ? 'ccc' : 'red' }]}>
                            <TextInput
                                style={{ outline: 'none' }}
                                placeholderTextColor='#444'
                                placeholder='Phone Number or Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType="emailAddress"
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputFields,
                        { borderColor: 1 > values.password.length || values.password.length >= 6 ? 'ccc' : 'red' }]}>
                            <TextInput
                                style={{ outline: 'none' }}
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                textContentType="password"
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        {/* <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
                        </TouchableOpacity> */}

                        <Button title='Sign Up' style={styles.button} onPress={handleSubmit} disabled={!isValid} />

                        <View style={styles.signupContainer}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                                <Text style={{ color: '#6BB0F5' }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            }
        </Formik>
    )
}

export default SignupForm

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
        marginTop: 50,
        paddingBottom: 70
    }
})
