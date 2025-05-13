import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import TButton from '../../component/TButton';
import WelcomeScreenItem from './component/WelcomeScreenItem';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {};

const WelcomeScreen2 = ({navigation}: any) => {
  const [currentOnboard, setCurrentOnboard] = useState(1);
  return (
    <ScrollView contentContainerStyle={tw`bg-[#E8F6F6] flex-1`}>
      <Text
        style={tw`text-[#121221] font-SatoshiRegular text-center text-[32px] mt-12`}>
       Simplify your menstrual
      </Text>
      <Text
        style={tw`text-[#121221] font-SatoshiRegular text-center text-[32px] mt-2`}>
     Tracking
      </Text>
      <View style={tw`flex items-center justify-center -mt-12`}>
        <Image
          style={tw`w-[98%]`}
          source={require('../../assets/Imgages/welcomeScreen2img.png')}
          resizeMode="contain"
        />
      </View>
      <View
        style={tw`bottom-0 bg-white h-42 rounded-t-3xl z-40 w-full absolute`}>
        <Text style={tw`font-SatoshiRegular my-4 text-lg text-black text-center`}>
        Easily monitor your seasons and get {"\n"}insights tailored to your unique cycle.
        </Text>
        <View style={tw`flex-row gap-2 items-center justify-center mb-4`}>
        <View style={tw`bg-[#84C2C2] h-2 w-[2%] rounded-2xl`}></View>
          <View style={tw`bg-[#84C2C2] h-2 w-[6%] rounded-2xl`}></View>
          <View style={tw`bg-[#84C2C2] h-2 w-[2%] rounded-2xl`}></View>
        </View>
        <View style={tw`items-center  justify-center`}>
          <TButton
          onPress={()=> navigation.navigate("WelcomeScreen3")}
            containerStyle={tw`bg-[#4FA8A8] rounded-3xl w-[90%] h-[50px] `}
            title="Next"
            titleStyle={tw`font-SatoshiRegular text-[#FFFFFF]`}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen2;

const styles = StyleSheet.create({});
