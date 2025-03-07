import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import Slider from '@react-native-community/slider';
import {SvgXml} from 'react-native-svg';
import {IconLeftArrow} from '../../assets/Icons';
import InputText from '../../component/InputText';
import TButton from '../../component/TButton';

const SetupStep1 = ({navigation}) => {
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
            style={tw` flex-1 `}
            minimumValue={0}
            maximumValue={1}
            value={progress}
            onValueChange={val => setProgress(val)}
            minimumTrackTintColor="#4FA8A8"
            maximumTrackTintColor="#D3D3D3"
            thumbTintColor="transparent" // Hide thumb for progress effect
          />
          <Text style={tw`text-gray-600 text-sm`}>
            {Math.round(progress * 5) + 1} / 6
          </Text>
        </View>

        {/* Info Text */}
        <View style={tw`flex-row items-start mt-6`}>
          <Text style={tw`text-lg text-gray-700`}>
            💡 Help us tailor your Seasons cycle journey by logging a few
            details.
          </Text>
        </View>
        <Text style={tw`text-center text-2xl font-SatoshiBold mt-12`}>
          What's your name?
        </Text>
        <View style={tw`w-[90%] items-center justify-center flex mx-auto mt-2`}>
          <View style={tw`w-80 py-6`}>
            <InputText
              placeholder="Enter Name"
              containerStyle={tw`bg-white w-full`}
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
            containerStyle={tw`bg-[#EAF5F5] h-12`}
          />
        </View>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep2')}
            title="Continue"
            containerStyle={tw`bg-[#4FA8A8] h-12`}
          />
        </View>
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default SetupStep1;

const styles = StyleSheet.create({});
