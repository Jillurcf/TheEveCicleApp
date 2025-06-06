import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { IconLeftArrow } from '../assets/Icons'
import { SvgXml } from 'react-native-svg'

type Props = {}

const WellnessGuidanceEbook = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: 'Balance & reflections',
    image: require('../assets/Imgages/Sanctum/Resource/wellnesGuidance/img.png')},
    {
      id: 2,
      title: 'Holistic wellness tips for all phases',
    image: require('../assets/Imgages/Sanctum/Resource/wellnesGuidance/img1.png')},
    {
      id: 3,
      title: 'Lorem ipsum',
    image: require('../assets/Imgages/Sanctum/Resource/wellnesGuidance/img2.png')},
    {
      id: 4,
      title: 'Wellness Guide',
    image: require('../assets/Imgages/Sanctum/Resource/wellnesGuidance/img1.png')},
    {
      id: 5,
      title: 'Lorem ipsum',
    image: require('../assets/Imgages/Sanctum/Resource/wellnesGuidance/img2.png')},
    {
      id: 6,
      title: 'Wellness Guide',
    image: require('../assets/Imgages/Sanctum/Resource/wellnesGuidance/img1.png')},
  ]
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: '#E8F6F6', padding: '4%' }}>
            <View style={tw`flex-row items-center justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation?.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`text-lg text-black font-SatoshiBold`}> Wellness Guides & eBooks</Text>
                <View></View>
            </View>
      <Text style={tw`text-black font-SatoshiBold text-2xl my-4`}>Explore the Wellness {'\n'}Guides & eBooks</Text>
      <View>
        <FlatList
        key={`flatlist-columns-${3}`}
        numColumns={3}
          data={data}
          renderItem={({ item }) => (
            <View style={tw`mb-4 items-center`}>
              <Image source={item.image} style={tw`w-26 h-40 mr-2 rounded-lg`} />
              <Text numberOfLines={1} style={tw`text-black w-24 font-SatoshiBold text-xs mt-2`}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}    
          />
      </View>
    </ScrollView>
  )
}

export default WellnessGuidanceEbook

const styles = StyleSheet.create({})