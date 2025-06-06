import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import ArticleImg from '../../assets/Imgages/Sanctum/Resource/Article.svg'
import DhikrAndMeditionImg from '../../assets/Imgages/Sanctum/Resource/DhikrAndMeditaion.svg'
import QuranicAndPropheticImg from '../../assets/Imgages/Sanctum/Resource/QuranicAndProphetic.svg'
import WellnessGuidenceImg from '../../assets/Imgages/Sanctum/Resource/WellnessGuidenceEbook.svg'

type Props = {}

const Sanctum = ({ navigation }) => {
  return (
    <ScrollView style={tw`bg-[#E8F6F6] flex-1 p-[4%]`}>
      <Text style={tw`text-xl text-[#121221] my-4 font-SatoshiBold`}>Resources</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Articles", {title: "Articles"})}
        style={tw`bg-[#C9E5EB] mt-4 rounded-lg p-4`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`flex-1`}>
            <Text style={{ fontFamily: 'Satoshi-Bold', color: "#121221" }}>Articles</Text>
            <Text style={tw`text-[#3A3A47] font-SatoshiRegular my-4 text-xs mt-2`}>
              Read various kinds of Islamic articles to gain knowledge and guidance.
            </Text>
          </View>
          <View style={tw`items-center mt-2`}>
            <ArticleImg width={60} height={60} />
          </View>
          {/* <Image source={require('../../assets/Imgages/Sanctum/Resource/Article.png')} /> */}
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#3A3A47] text-xs font-SatoshiBold mt-2`}>
            Learn more
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Articles", {title: "Dhikr & meditations"})}
        style={tw`bg-[#E5DAE7] mt-4 rounded-lg p-4`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`flex-1`}>
            <Text style={{ fontFamily: 'Satoshi-Bold', color: "#121221" }}>Dhikr & meditations</Text>
            <View style={tw`w-[95%]`}>
              <Text style={tw`text-[#3A3A47] my-4 font-SatoshiRegular text-xs mt-2`}>
                Find spiritual peace and connect deeply with Allah during every phase of your journey.
              </Text>
            </View>
          </View>
          <View style={tw`items-center mt-2`}>

          <DhikrAndMeditionImg width={60} height={60} />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#3A3A47] text-xs font-SatoshiBold mt-2`}>
            Learn more
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Articles", {title: "Quranic & prophetic duas"})}
        style={tw`bg-[#CCE7DE] mt-4 rounded-lg p-4`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`flex-1`}>
            <Text style={{ fontFamily: 'Satoshi-Bold', color: "#121221" }}>Quranic & prophetic duas</Text>
            <Text style={tw`text-[#3A3A47] my-4 font-SatoshiRegular text-xs mt-2`}>
              Read various kinds of Islamic articles to gain knowledge and guidance.
            </Text>
          </View>
          <View style={tw`items-center mt-2`}>

          <QuranicAndPropheticImg width={60} height={60} />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#3A3A47] text-xs font-SatoshiBold mt-2`}>
            Learn more
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Articles", {title: "Wellness guidance & eBook"})}
        style={tw`bg-[#DCD3EC] my-4 rounded-lg p-4`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`flex-1`}>
            <Text style={{ fontFamily: 'Satoshi-Bold', color: "#121221" }}>Wellness guidance & eBook</Text>
            <Text style={tw`text-[#3A3A47] my-4 font-SatoshiRegular text-xs mt-2`}>
              Read various kinds of Islamic articles to gain knowledge and guidance.
            </Text>
          </View>
       <View style={tw`items-center mt-2`}>
           <WellnessGuidenceImg width={60} height={60} />
       </View>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#3A3A47] text-xs font-SatoshiBold mt-2`}>
            Learn more
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
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