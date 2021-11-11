import React, { useState } from 'react'
import { View, Text, Image, TextInput, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import validUrl from 'valid-url'

const placeholder_Img = 'https://image.shutterstock.com/image-vector/error-500-page-empty-symbol-260nw-1711106146.jpg'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the characters')
})

const FormikPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(placeholder_Img)
    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => {
                console.log(values)
                navigation.push('HomeScreen')
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}>
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image style={{ width: 100, height: 90 }} source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : placeholder_Img }} />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                style={{ color: 'white', fontSize: 20, outline: 'none' }}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <TextInput
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                        style={{ color: 'white', fontSize: 18, marginLeft: 10, outline: 'none' }}
                        placeholder="Enter Image Url"
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontsize: 10, color: 'red', marginLeft: 10 }}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button title='Share' onPress={handleSubmit} disabled={!isValid} />
                </>

            }
        </Formik>
    )
}

export default FormikPostUploader
