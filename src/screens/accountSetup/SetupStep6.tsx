

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {TabView, TabBar} from 'react-native-tab-view';
import tw from '../../lib/tailwind';
import {SvgXml} from 'react-native-svg';
import {IconLeftArrow} from '../../assets/Icons';
import Slider from '@react-native-assets/slider';
import WheelPicker from 'react-native-wheely';
import TButton from '../../component/TButton';
import {Checkbox, RadioButton} from 'react-native-ui-lib';

type Props = {};

// Second tab route with collapsible functionality

const SetupStep6 = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [progress, setProgress] = useState(1);

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleRadioButtonLanguage = (option1: string) => {
    setSelectedLanguage(option1);
  };

  return (
    <View style={tw`flex-1 bg-[#E8F6F6] flex-col justify-between px-[4%]`}>
      <View style={tw`w-full`}>
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
            step={1}
            onValueChange={val => setProgress(val)}
            minimumTrackTintColor="#A8D4D4"
            maximumTrackTintColor="#FFFFFF" // Gray for the remaining track
            // thumbTintColor="transparent" // Optional: hides the thumb
            thumbTintColor="#4FA8A8" // Optional: sets the thumb color
            thumbStyle={{ width: 0, height: 0 }} // Hides the thumb
            trackStyle={{ height: 8, borderRadius: 4, }}
          />
          <Text style={tw`text-gray-600 text-sm`}>
            {Math.round(progress * 5) + 1} / 6
          </Text>
        </View>
        <Text style={tw`text-center text-[#121221] lg:text-3xl md:text-3xl sm:text-[26px] font-SatoshiBold mt-6`}>
          Which phase of the cycle {'\n'} do you feel you are in right
          {'\n'}now?
        </Text>
        <View style={tw`w-full mt-12`}>
          {selectedLanguage === 'Folicular' ? (
            <View
              style={tw`mt-4 flex-row gap-4 bg-[#4FA8A8] border border-[#4FA8A8] rounded-3xl p-3`}>
              <RadioButton
                color="white"
                selected={selectedLanguage === 'Folicular'}
                onPress={() => handleRadioButtonLanguage('Folicular')}
              />
              <Text style={tw`text-white font-SatoshiRegular text-[14px]`}>
                Folicular (Spring)
              </Text>
            </View>
          ) : (
            <View
              style={tw`mt-4 flex-row gap-4  border border-gray-400 rounded-3xl p-3`}>
              <RadioButton
                color="gray"
                selected={selectedLanguage === 'Folicular'}
                onPress={() => handleRadioButtonLanguage('Folicular')}
              />
               <Text style={tw`text-[#3A3A47] font-SatoshiRegular text-[14px]`}>
                Folicular (Spring)
              </Text>
            </View>
          )}
          {selectedLanguage === 'Ovulation' ? (
            <View
            style={tw`mt-2 flex-row gap-4 bg-[#4FA8A8] border border-[#4FA8A8] rounded-3xl p-3`}>
              <RadioButton
                color="white"
                selected={selectedLanguage === 'Ovulation'}
                onPress={() => handleRadioButtonLanguage('Ovulation')}
              />
                 <Text style={tw`text-white font-SatoshiRegular text-[14px]`}>
                Ovulation (Summer)
              </Text>
            </View>
          ) : (
            <View
              style={tw`mt-2 flex-row gap-4  border border-gray-400 rounded-3xl p-3`}>
              <RadioButton
                color="gray"
                selected={selectedLanguage === 'Ovulation'}
                onPress={() => handleRadioButtonLanguage('Ovulation')}
              />
               <Text style={tw`text-[#3A3A47] font-SatoshiRegular text-[14px]`}>
                Ovulation (Summer)
              </Text>
            </View>
          )}
          {selectedLanguage === 'Luteal' ? (
            <View
            style={tw`mt-2 flex-row gap-4 bg-[#4FA8A8] border border-[#4FA8A8] rounded-3xl p-3`}>
              <RadioButton
                color="white"
                selected={selectedLanguage === 'Luteal'}
                onPress={() => handleRadioButtonLanguage('Luteal')}
              />
                <Text style={tw`text-white font-SatoshiRegular text-[14px]`}>
                Luteal (Autumn)
              </Text>
            </View>
          ) : (
            <View
              style={tw`mt-2 flex-row gap-4  border border-gray-400 rounded-3xl p-3`}>
              <RadioButton
                color="gray"
                selected={selectedLanguage === 'Luteal'}
                onPress={() => handleRadioButtonLanguage('Luteal')}
              />
              <Text style={tw`text-[#3A3A47] font-SatoshiRegular text-[14px]`}>
                Luteal (Autumn)
              </Text>
            </View>
          )}
          {selectedLanguage === 'Menstrual' ? (
            <View
            style={tw`mt-2 flex-row gap-4 bg-[#4FA8A8] border border-[#4FA8A8] rounded-3xl p-3`}>
              <RadioButton
                color="white"
                selected={selectedLanguage === 'Menstrual'}
                onPress={() => handleRadioButtonLanguage('Menstrual')}
              />
               <Text style={tw`text-white font-SatoshiRegular text-[14px]`}>
                Menstrual (Winter)
              </Text>
            </View>
          ) : (
            <View
              style={tw`mt-2 flex-row gap-4  border border-gray-400 rounded-3xl p-3`}>
              <RadioButton
                color="gray"
                selected={selectedLanguage === 'Menstrual'}
                onPress={() => handleRadioButtonLanguage('Menstrual')}
              />
              <Text style={tw`text-[#3A3A47] font-SatoshiRegular text-[14px]`}>
                Menstrual (Winter)
              </Text>
            </View>
          )}
        </View>
      </View>

      <View style={tw`flex-row w-full gap-2 justify-between py-6`}>
        <View>
          <TButton
            onPress={() => navigation.navigate('LoadingScreen')}
            titleStyle={tw`text-[#4FA8A8]`}
            title="Skip"
            containerStyle={tw`bg-[#EAF5F5] rounded-3xl w-[160px] h-12`}
          />
        </View>
        <View>
          <TButton
            onPress={() => navigation.navigate('LoadingScreen')}
            title="Continue"
            containerStyle={tw`bg-[#4FA8A8] h-12 w-[160px] rounded-3xl`}
          />
        </View>
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default SetupStep6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  scene: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#A8D4D4', // Background for the tab bar
    borderRadius: 15, // Rounded corners for the tab bar
    marginHorizontal: 10, // Horizontal margin for the tab bar
    height: 50, // Tab bar height
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: 'white', // Active tab indicator color
    height: 3, // Indicator height
    borderRadius: 2, // Rounded corners for the indicator
  },
  tab: {
    width: 170, // Auto-width for each tab
    marginHorizontal: 5, // Horizontal margin between tabs
    paddingVertical: 10, // Vertical padding for tabs
    borderRadius: 15, // Rounded corners for each tab
  },
  label: {
    fontSize: 16, // Label font size
    fontWeight: 'bold', // Bold text for tab labels
    color: '#DAE6E7',
  },
  activeLabel: {
    color: '#DAE6E7',
  },
  inactiveLabel: {
    color: 'red', // Inactive tab label color (dark gray)
  },
  activeTab: {
    backgroundColor: 'white', // Active tab background (white)
    borderColor: 'black', // Border for active tab (light gray)
    borderWidth: 1, // Active tab border width
  },
  inactiveTab: {
    backgroundColor: 'black', // Inactive tab background color (light gray)
  },
});
