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
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const SetupStep2 = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0.2); // Example progress (20%)
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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

        <Text style={tw`text-center text-2xl font-SatoshiBold mt-12`}>
          What's your birth date?
        </Text>
        <View style={tw`mt-24 w-full items-center`}>
          <DatePicker date={date} mode="date" onDateChange={setDate} />
        </View>
      </View>
      <View style={tw`flex-row w-full gap-2 justify-between py-6`}>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep3')}
            titleStyle={tw`text-[#4FA8A8]`}
            title="Skip"
            containerStyle={tw`bg-[#EAF5F5] h-12`}
          />
        </View>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep3')}
            title="Continue"
            containerStyle={tw`bg-[#4FA8A8] h-12`}
          />
        </View>
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default SetupStep2;

const styles = StyleSheet.create({});
