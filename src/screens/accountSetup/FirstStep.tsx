import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';

const FirstStep = ({navigation}) => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-center text-2xl font-SatoshiBold`}>
        Are you using The Sanctum {'\n'}app for yourself?
      </Text>
      <View style={tw`w-[90%] items-center justify-center flex mx-auto`}>
        <TouchableOpacity
        onPress={() => navigation.navigate('SetupStep1')}
          style={tw`bg-[#E7E7E9] w-full items-center rounded-xl h-12 justify-center mt-8`}>
          <Text style={tw`text-[#4FA8A8] font-SatoshiBold`}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('LinkOtherUsers')}
          style={tw`bg-[#E7E7E9] w-full items-center rounded-xl h-12 justify-center mt-4`}>
          <Text style={tw`text-[#4FA8A8] font-SatoshiBold`}>No, I have my partner code</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => navigation.navigate('LinkOtherUsers')}
          style={tw`bg-[#E7E7E9] w-full items-center rounded-xl h-12 justify-center mt-4`}>
          <Text style={tw`text-[#4FA8A8] font-SatoshiBold`}>
            No. I have my village (friends & family) code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstStep;

const styles = StyleSheet.create({});
