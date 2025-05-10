import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import TButton from '../../component/TButton';
import WelcomeScreenItem from './component/WelcomeScreenItem';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {};

const WelcomeScreen3 = ({navigation}: any) => {
  const [currentOnboard, setCurrentOnboard] = useState(1);
  return (
    <ScrollView contentContainerStyle={tw`bg-[#E8F6F6] flex-1`}>
      <Text style={tw`text-[#121221] font-SatoshiRegular text-center text-[32px] mt-12`}>
      Spiritual resources and {"\n"}meditations
      </Text>
      <View style={tw`flex items-center justify-center -mt-12`}>
        <Image
          style={tw`w-[98%]`}
          source={require('../../assets/Imgages/welocmeScreenimg3.png')}
          resizeMode="contain"
        />
      </View>
      <View
        style={tw`bottom-0 bg-white h-42 rounded-t-3xl z-40 w-full absolute`}>
        <Text style={tw`font-SatoshiRegular my-4 text-[#3A3A47] text-[16px] text-center`}>
        Stay connected through spiritual guidance {'\n'}during every phase.
        </Text>
        <View style={tw`flex-row gap-2 items-center justify-center mb-4`}>
          <View style={tw`bg-[#84C2C2] h-2 w-[2%] rounded-2xl`}></View>
          <View style={tw`bg-[#84C2C2] h-2 w-[2%] rounded-2xl`}></View>
          <View style={tw`bg-[#84C2C2] h-2 w-[6%] rounded-2xl`}></View>
        </View>
        <View style={tw`items-center justify-center`}>
          <TButton
          onPress={()=> navigation.navigate("RegistrationScreen")}
            containerStyle={tw`bg-[#4FA8A8] h-[50px] rounded-3xl w-[90%]  `}
            title="Next"
            titleStyle={tw`font-SatoshiRegular`}
          />
        </View>
      </View>
      <StatusBar translucent={false}/>
    </ScrollView>
  );
};

export default WelcomeScreen3;

const styles = StyleSheet.create({});
