import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'

type Props = {}

const Sanctum = ({navigation}) => {
  return (
    <ScrollView style={tw`bg-[#E8F6F6] flex-1 p-[4%]`}>
      <Text style={tw`text-xl font-SatoshiBold`}>Resources</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Articles")}
      style={tw`bg-[#C9E5EB] mt-4 rounded-lg p-4`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`flex-1`}>
            <Text style={tw` font-SatoshiBold`}>Articles</Text>
            <Text style={tw` font-SatoshiRegular text-sm mt-2`}>
              Read various kinds of Islamic articles to gain knowledge and guidance.
            </Text>
          </View>
          <Image source={require('../../assets/Imgages/Sanctum/Resource/Article.png')} />
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#2B9696] font-SatoshiBold mt-2`}>
            Learn more
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={tw`bg-[#E5DAE7] mt-4 rounded-lg p-4`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`flex-1`}>
            <Text style={tw` font-SatoshiBold`}>Articles</Text>
            <Text style={tw` font-SatoshiRegular text-sm mt-2`}>
              Read various kinds of Islamic articles to gain knowledge and guidance.
            </Text>
          </View>
          <Image source={require('../../assets/Imgages/Sanctum/Resource/DhikrAndMeditaion.png')} />
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#2B9696] font-SatoshiBold mt-2`}>
            Learn more
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`bg-[#CCE7DE] mt-4 rounded-lg p-4`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`flex-1`}>
            <Text style={tw` font-SatoshiBold`}>Articles</Text>
            <Text style={tw` font-SatoshiRegular text-sm mt-2`}>
              Read various kinds of Islamic articles to gain knowledge and guidance.
            </Text>
          </View>
          <Image source={require('../../assets/Imgages/Sanctum/Resource/QuranicAndprophetic.png')} />
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#2B9696] font-SatoshiBold mt-2`}>
            Learn more
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`bg-[#DCD3EC] my-4 rounded-lg p-4`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`flex-1`}>
            <Text style={tw` font-SatoshiBold`}>Articles</Text>
            <Text style={tw` font-SatoshiRegular text-sm mt-2`}>
              Read various kinds of Islamic articles to gain knowledge and guidance.
            </Text>
          </View>
          <Image source={require('../../assets/Imgages/Sanctum/Resource/WellnessAndGuidenceEbook.png')} />
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#2B9696] font-SatoshiBold mt-2`}>
            Learn more
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E8F6F6"
        translucent={false}
      />
    </ScrollView>
  )
}

export default Sanctum

const styles = StyleSheet.create({})