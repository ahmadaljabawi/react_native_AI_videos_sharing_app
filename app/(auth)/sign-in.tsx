import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

import { images } from '../../constants'

const SignIn = () => {

  const [form, setform] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full h-full justify-center px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
          <Text className='text-2xl text-white mt-10 font-psemibold'>Log in to Aora</Text>

          <FormField 
            title='Email'
            value= {form.email}
            handleChangeText={(e) => setform({ ...form, email: e})}
            otherStyles = 'mt-7'
            keyboardType = 'email-address'
          />
          <FormField 
            title='Password'
            value= {form.password}
            handleChangeText={(e) => setform({ ...form, password: e})}
            otherStyles = 'mt-7'
          />

          <CustomButton 
            title="SignIn"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have account?
            </Text>
            <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn