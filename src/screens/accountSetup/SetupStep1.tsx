import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
// import Slider from '@react-native-community/slider';
import Slider from '@react-native-assets/slider';
import { SvgXml } from 'react-native-svg';
import { IconLeftArrow, IconSetup1 } from '../../assets/Icons';
import InputText from '../../component/InputText';
import TButton from '../../component/TButton';

const SetupStep1 = ({ navigation }) => {
  const [progress, setProgress] = useState(0.2); // Example progress (20%)
  return (
    <View
      style={tw`flex-1 bg-[#E8F6F6] flex-col justify-between items-center px-[4%]`}>
      <View>
        <View style={tw`flex-row justify-between items-center mt-8`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={IconLeftArrow} />
          </TouchableOpacity>

          {/* Progress Bar */}
          <Slider
            style={tw`flex-1 h-4 mx-2`}
            minimumValue={0}
            maximumValue={1}
            value={progress}
            step={0.01}
            onValueChange={val => setProgress(val)}
            minimumTrackTintColor="#A8D4D4" 
            maximumTrackTintColor="#FFFFFF" // Gray for the remaining track
            // thumbTintColor="transparent" // Optional: hides the thumb
            thumbTintColor="#4FA8A8" // Optional: sets the thumb color
            thumbStyle={{ width: 0, height: 0 }} // Hides the thumb
            trackStyle={{ height: 8, borderRadius: 4,  }}
          />

          <Text style={tw`text-gray-600 text-sm ml-1`}>
            {Math.round(progress * 5) + 0} / 6
          </Text>
        </View>

        {/* Info Text */}
        <View style={tw` mt-6`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={IconSetup1} />
            <Text style={tw`text-[14px] text-[#3A3A47]`}>
              Help us tailor your Seasons cycle journey by
            </Text>
          </View>
          <Text style={tw`text-lg pl-4 text-[14px] text-[#3A3A47]`}>
            logging a few
            details.
          </Text>
        </View>
        <Text style={tw`text-center text-[#121221] text-2xl font-SatoshiBold mt-12`}>
          What's your name?
        </Text>
        <View style={tw`w-[90%] items-center justify-center flex mx-auto mt-2`}>
          <View style={tw`w-80 py-6`}>
            <InputText
              placeholder="Enter Name"
              textAlign="center"
              style={tw`text-[#9E9EA4] text-4xl font-SatoshiBold`}
              containerStyle={tw`bg-white h-[88px] w-full`}
              
            />
          </View>
        </View>
      </View>
      <View style={tw`flex-row w-full gap-2 justify-between py-6`}>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep2')}
            titleStyle={tw`text-[#4FA8A8]`}
            title="Skip"
            containerStyle={tw`bg-[#EAF5F5] rounded-3xl w-[160px] h-12`}
          />
        </View>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep2')}
            title="Continue"
            containerStyle={tw`bg-[#4FA8A8] h-12 w-[160px] rounded-3xl`}
          />
        </View>
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default SetupStep1;

const styles = StyleSheet.create({});
