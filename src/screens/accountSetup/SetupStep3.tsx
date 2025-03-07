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
import WheelPicker from 'react-native-wheely';

const SetupStep3 = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0.2); // Example progress (20%)
  return (
    <View
      style={tw`flex-1 bg-[#E8F6F6] flex-col justify-between items-center px-[4%]`}>
      <View style={tw`w-full`}>
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

        <Text style={tw`text-center text-2xl font-SatoshiBold my-24`}>
         How long Does your Period {'\n'}usually last?
        </Text>
        <View>
          <WheelPicker
            itemStyle={tw`bg-[#4FA8A8]`}
            itemTextStyle={tw`text-white text-xl`}
            selectedIndex={selectedIndex}
            options={[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
              '13',
              '14',
              '15',
            ]}
            onChange={index => setSelectedIndex(index)}
          />
        </View>
      </View>
      <View style={tw`flex-row w-full gap-2 justify-between py-6`}>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep4')}
            titleStyle={tw`text-[#4FA8A8]`}
            title="Skip"
            containerStyle={tw`bg-[#EAF5F5] h-12`}
          />
        </View>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep4')}
            title="Continue"
            containerStyle={tw`bg-[#4FA8A8] h-12`}
          />
        </View>
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default SetupStep3;

const styles = StyleSheet.create({});
