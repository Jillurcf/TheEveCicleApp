import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import tw from '../lib/tailwind';

type Props = {};

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation?.replace('Drawer');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={tw` flex-1 items-center justify-center`}>
      <Text style={tw`text-[#330C81] text-3xl font-bold`}>THE SANCTUM</Text>
      <Image source={require('../assets/Imgages/SplashIcon.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
