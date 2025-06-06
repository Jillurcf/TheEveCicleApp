import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow, IconUpload } from '../../assets/Icons'

type Props = {}

const ArticleDetails = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView style={tw`bg-[#E8F6F6] flex-1 p-[4%]`}>
      <TouchableOpacity
        onPress={() => navigation?.goBack()}
        style={tw`flex-row items-center justify-between`}
      >
        <SvgXml xml={IconLeftArrow} />
        {/* <Text style={tw`text-black text-xl font-SatoshiBold`}>
          Articles
        </Text> */}
        <View></View>
      </TouchableOpacity>
      <View style={tw`mt-4 bg-white rounded-lg p-4`}>
        <View style={tw`flex-row justify-between`}>
          <View>
            <Text style={tw`text-black font-SatoshiRegular`}>
              Faith During Hard Times
            </Text>
            <Text style={tw`text-black font-SatoshiBold text-2xl mt-1`}>
              Practical Tips to {'\n'}Strengthen Your {"\n"}Connection with Allah
            </Text>
            <Text style={tw`text-black font-SatoshiRegular mt-1`}>
              Published on 14 aug,2024
            </Text>
          </View>
          <SvgXml xml={IconUpload} />
        </View>
        <View style={tw`items-center mt-4`}>
          <Image style={tw`w-[100%] h-48 rounded-lg`} source={require('../../assets/Imgages/Sanctum/articles/ArticleDetailsImg.png')} />
        </View>
        <View>
          <Text
          style={{fontFamily: "Satoshi-Regular", color: "#3A3A47", marginTop: 10, paddingVertical: 10}}
          // style={tw`text-[#3A3A47] font-SatoshiRegular mt-2`}
          >
            Life is filled with tests, but every challenge is an opportunity to grow closer to Allah. In this article, we explore the importance of patience, reliance on Allah, and maintaining gratitude even in difficult times. Learn how daily practices like Salah, reciting Quranic verses, and seeking advice from trusted community members can help you stay strong in your faith while navigating hardships.
          </Text>
        </View>
      </View>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E8F6F6"
        translucent={false}
      />
    </ScrollView>
  )
}

export default ArticleDetails

const styles = StyleSheet.create({})