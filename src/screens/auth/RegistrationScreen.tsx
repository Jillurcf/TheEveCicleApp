import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';
import TButton from '../../component/TButton';
import { SvgXml } from 'react-native-svg';
import { IconApple, IconFacebook, IconGoogle, IconInstaGram } from '../../assets/Icons';

type Props = {};

const RegistrationScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-[#E8F6F6] justify-center items-center`}>
      <Image
        style={tw`w-[100px] mt-8 h-[96px]`}
        source={require('../../assets/Imgages/SplashIcon.png')}
      />
      <Text style={tw`text-[30px] text-[#121221] font-SatoshiRegular my-4`}>THE SANCTUM</Text>
      <Text style={tw`font-SatoshiRegular text-lg`}>Let's get started!</Text>
      <View
        style={tw`bg-white h-12 w-[90%] mt-12  flex-row items-center px-4 rounded-3xl gap-12`}>
        <SvgXml width={30} xml={IconGoogle} />
        <Text style={tw`font-SatoshiRegular text-[#3A3A47]`}>Continue with Google</Text>
      </View>
      <View
        style={tw`bg-white h-12 w-[90%] mt-3  flex-row items-center px-4 rounded-3xl gap-12`}>
        <SvgXml width={30} xml={IconApple} />
        <Text style={tw`font-SatoshiRegular text-[#3A3A47]`}>Continue with Google</Text>
      </View>
      <View
        style={tw`bg-white h-12 w-[90%] mt-3  flex-row items-center px-4 rounded-3xl gap-12`}>
        <SvgXml width={30} xml={IconFacebook} />
        <Text style={tw`font-SatoshiRegular text-[#3A3A47]`}>Continue with Google</Text>
      </View>
      <View
        style={tw`bg-white h-12 w-[90%] mt-3  flex-row items-center px-4 rounded-3xl gap-12`}>
        <SvgXml width={30} xml={IconInstaGram} />
        <Text style={tw`font-SatoshiRegular text-[#3A3A47]`}>Continue with Google</Text>
      </View>
      <View style={tw`w-full items-center justify-center mt-10`}>
        <TButton
          onPress={() => navigation.navigate('Signup')}
          titleStyle={tw`font-SatoshiRegular text-[16px]`}
          title="Sign up"
          containerStyle={tw`bg-[#4FA8A8] rounded-3xl w-[90%]`}
        />
      </View>
      <View style={tw`w-full items-center justify-center my-2`}>
        <TButton
          onPress={() => navigation.navigate('Login')}
          titleStyle={tw`text-[#4FA8A8] text-[16px] font-SatoshiRegular`}
          title="Log in"
          containerStyle={tw`bg-white w-[90%] rounded-3xl`}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('FreeTrialScreen')}>
        <Text style={tw`text-[#1A5C5C] text-[16px] rounded-3xl font-SatoshiRegular my-4`}>
          Start 14 Days Free Trial!
        </Text>
      </TouchableOpacity>
      <View style={tw`bottom-0 flex-row gap-2 items-center`}>
        <Text style={tw`text-[#3A3A47] font-SatoshiRegular my-4`}>
          Privacy policy
        </Text>
        <View style={tw`bg-[#9E9EA4] rounded-full w-2 h-2`}></View>
        <Text style={tw`text-[#3A3A47] font-SatoshiRegular my-4`}>
          Terms of services
        </Text>
      </View>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({});
