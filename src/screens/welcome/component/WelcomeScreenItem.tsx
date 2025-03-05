import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from '../../../lib/tailwind';

const WelcomeScreenItem = ({item, title, subTitle}: any) => {
  return (
    <View>
      <View style={tw`mt-6`}>
        <Text style={tw`text-black text-[22px] text-center font- SatoshiRegular`}>
          {title}
        </Text>
      </View>
      {item === 1 ? (
        <Image
          style={tw`w-full`}
          source={require(`../../../assets/Imgages/welcomeScreen1img.png`)}
        />
      ) : item === 2 ? (
        <Image
          style={tw`w-full`}
          source={require(`../../../assets/Imgages/welcomeScreen1img.png`)}
        />
      ) : (
        <Image
          style={tw`w-full`}
          source={require(`../../../assets/Imgages/welcomeScreen1img.png`)}
        />
      )}
      <View style={tw`mt-4 flex-row gap-2 items-center justify-center`}>
        <View
          style={tw`h-1.5 ${
            item === 1 ? 'w-6' : 'w-1.5'
          } bg-primary rounded-full`}
        />
        <View
          style={tw`h-1.5 ${
            item === 2 ? 'w-6' : 'w-1.5'
          } bg-primary rounded-full`}
        />
        <View
          style={tw`h-1.5 ${
            item === 3 ? 'w-6' : 'w-1.5'
          } bg-primary rounded-full`}
        />
      </View>

      <View style={tw`mt-3 `}>
       
        <Text style={tw`text-xl px-[4%] text-black font-SatoshiNormal text-center`}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreenItem;
