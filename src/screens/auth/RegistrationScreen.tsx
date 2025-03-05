import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';
import TButton from '../../component/TButton';
import {SvgXml} from 'react-native-svg';
import {IconGoogle} from '../../assets/Icons';

type Props = {};

const RegistrationScreen = ({navigation}) => {
  return (
    <View style={tw`flex-1 bg-[#E8F6F6] justify-center items-center`}>
      <Image
        style={tw`w-[40] h-[40]`}
        source={require('../../assets/Imgages/SplashIcon.png')}
      />
      <Text style={tw`text-4xl font-SatoshiBold my-4`}>THE SANCTUM</Text>
      <Text style={tw`font-SatoshiRegular text-lg`}>Let's get started!</Text>
      <View
        style={tw`bg-white h-14 w-[90%] my-6 flex-row items-center px-4 rounded-2xl gap-12`}>
        <SvgXml width={30} xml={IconGoogle} />
        <Text style={tw`font-SatoshiRegular`}>Continue with Google</Text>
      </View>
      <View style={tw`w-full items-center justify-center my-2`}>
        <TButton
          onPress={() => navigation.navigate('Signup')}
          titleStyle={tw`font-SatoshiRegular`}
          title="Sign up"
          containerStyle={tw`bg-[#4FA8A8] w-[90%]`}
        />
      </View>
      <View style={tw`w-full items-center justify-center my-2`}>
        <TButton
          onPress={() => navigation.navigate('Login')}
          titleStyle={tw`text-[#4FA8A8] font-SatoshiRegular`}
          title="Log in"
          containerStyle={tw`bg-white w-[90%]`}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('FreeTrialScreen')}>
        <Text style={tw`text-[#1A5C5C] font-SatoshiRegular my-4`}>
          Start 14 Days Free Trial!
        </Text>
      </TouchableOpacity>
      {/* <View style={tw`bottom-0 flex`}>
        <Text style={tw`text-[#1A5C5C] font-SatoshiRegular my-4`}>
        Privacy policy * Terms of services
        </Text>
      </View> */}
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({});
