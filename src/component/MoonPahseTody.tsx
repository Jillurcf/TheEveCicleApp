import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'

type Props = {}

const MoonPahseTody = (props: Props) => {
  return (
    <View style={tw`px-[4%]`}>
      <Text style={tw`text-white text-xl font-SatoshiRegular text-center mt-12`}>Moon phase today</Text>
      <Text style={tw`text-white font-SatoshiRegular text-4xl text-center my-6`}>Wanning cresent</Text>
      <Image source={require("../assets/Imgages/MoonPhase-today/image.png")}/>
      <View style={tw`px-[4%]`}>
      <Text style={tw`text-white font-SatoshiLight text-[16px] text-center px-[8%] mt-6`}>"When we menstruated during the lifetime of the Messenger of Allah (peace be upon him), we were ordered to make up for the fasts that we missed but not for the prayers."</Text>
      <Text style={tw`text-white font-SatoshiLight text-[16px] text-center px-[6%] my-6`}>-Sahih Muslim, Book 6, Hadith 682</Text>
      </View>
    </View>
  )
}

export default MoonPahseTody

const styles = StyleSheet.create({})