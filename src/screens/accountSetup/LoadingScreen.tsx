// LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import tw from '../../lib/tailwind';


const LoadingScreen = ({navigation}: {navigation:any}) => {
    
  const progress = 65;
useEffect(()=> {
const timer= setTimeout(()=> {
navigation.navigate("Drawer")
}, 1000) 
return ()=> clearTimeout(timer)
}, [])

  return (
    <View style={tw`flex-1 items-center justify-between bg-[#E6F6F5] py-24`}>
      {/* Top Text */}
      <Text style={tw`text-center text-[#121221] lg:text-[30px] md:text-[30px] sm:text-[25px] font-medium px-5`}>
        We’re setting up your{'\n'}personalised calendar...
      </Text>

      {/* Progress Circle */}
      <AnimatedCircularProgress
        size={200}
        width={15}
        fill={progress}
        tintColor="#5AB1AC"
        backgroundColor="#F0F0F0"
        rotation={0}
        lineCap="round"
      >
        {(fill) => (
          <Text style={tw`text-xl font-semibold text-[#1A1A1A]`}>
            {`${Math.round(fill)}%`}
          </Text>
        )}
      </AnimatedCircularProgress>

      {/* Bottom Text */}
      <Text style={tw`text-xs text-gray-500 text-center mb-5`}>
        This will just take a moment.
      </Text>
    </View>
  );
};

export default LoadingScreen;
