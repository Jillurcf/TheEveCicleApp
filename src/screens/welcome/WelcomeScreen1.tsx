import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import TButton from '../../component/TButton';
import WelcomeScreenItem from './component/WelcomeScreenItem';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {};

const WelcomeScreen1 = ({navigation}: any) => {
  const [currentOnboard, setCurrentOnboard] = useState(1);
  return (
    <ScrollView style={tw`bg-[#E8F6F6] flex-1`}>
      <Text
        style={tw`text-black font-SatoshiBold text-center text-3xl mt-6`}>
        Welcome to {'\n'} The Sanctum app
      </Text>
      <Image
        style={tw`relative`}
        source={require('../../assets/Imgages/welcomeScreen1img.png')}
      />
      <View
        style={tw`bottom-0 bg-white h-42 rounded-t-3xl z-40 w-full absolute`}>
        <Text style={tw`font-SatoshiRegular my-4 text-black text-center`}>
          Your personal cycle and wellness guide {'\n'} with spiritual insights.
        </Text>
        <View style={tw`flex-row gap-2 items-center justify-center mb-4`}>
          <View style={tw`bg-[#84C2C2] h-2 w-[6%] rounded-2xl`}></View>
          <View style={tw`bg-[#84C2C2] h-2 w-[2%] rounded-2xl`}></View>
          <View style={tw`bg-[#84C2C2] h-2 w-[2%] rounded-2xl`}></View>
        </View>
        <View style={tw`items-center justify-center`}>
          <TButton
          onPress={() => navigation.navigate("WelcomeScreen2")}
            containerStyle={tw`bg-[#4FA8A8] w-[80%]  `}
            title="Next"
            titleStyle={tw`font-SatoshiRegular`}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen1;

const styles = StyleSheet.create({});
