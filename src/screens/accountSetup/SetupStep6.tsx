// import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
// import React, { useState } from 'react';
// import {TabView, TabBar} from 'react-native-tab-view';
// import tw from '../../lib/tailwind';
// import { SvgXml } from 'react-native-svg';
// import { IconLeftArrow } from '../../assets/Icons';
// import Slider from '@react-native-community/slider';

// type Props = {};

// const FirstRoute = () => (
//   <View style={styles.scene}>
//     <Text>Regular</Text>
//   </View>
// );

// // Second tab route with collapsible functionality
// const SecondRoute = () => (
//   <View style={styles.scene}>
//     <Text>Irregular</Text>
//   </View>
// );

// const SetupStep4 = ({navigation}) => {
//   const [index, setIndex] = React.useState(0);
//    const [progress, setProgress] = useState(0.2);

//   const routes = [
//     {key: 'first', title: 'Regular'},
//     {key: 'second', title: 'Irregular'},
//   ];

//   const renderScene = ({route}) => {
//     switch (route.key) {
//       case 'first':
//         return <FirstRoute />;
//       case 'second':
//         return <SecondRoute />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <View
//       style={tw`flex-1 bg-[#E8F6F6] flex-col justify-between items-center px-[4%]`}>
//       <View style={tw`flex-row justify-between items-center mt-8`}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <SvgXml xml={IconLeftArrow} />
//         </TouchableOpacity>

//         {/* Progress Bar */}
//         <Slider
//           style={tw` flex-1 `}
//           minimumValue={0}
//           maximumValue={1}
//           value={progress}
//           onValueChange={val => setProgress(val)}
//           minimumTrackTintColor="#4FA8A8"
//           maximumTrackTintColor="#D3D3D3"
//           thumbTintColor="transparent" // Hide thumb for progress effect
//         />
//         <Text style={tw`text-gray-600 text-sm`}>
//           {Math.round(progress * 5) + 1} / 6
//         </Text>
//       </View>
//       <Text style={tw`text-center text-2xl font-SatoshiBold my-6`}>
//            How long does your cycle {'\n'}usually last?
//           </Text>
//       <View>
//         <TabView
//           style={tw`gap-4`} // Tailwind for gap (you can adjust as per your needs)
//           navigationState={{index, routes}}
//           renderScene={renderScene}
//           onIndexChange={setIndex}
//           initialLayout={{width: Dimensions.get('window').width}}
//           renderTabBar={props => (
//             <TabBar
//               {...props}
//               style={tw`bg-[#DAE6E7] border-0`} // Custom tab bar style
//               indicatorStyle={styles.indicator} // Custom tab indicator style
//               tabStyle={tw` `} // Custom tab item style
//               labelStyle={styles.label} // Custom label style
//             />
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// export default SetupStep4;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   scene: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabBar: {
//     backgroundColor: 'red', // Background color of the tab bar
//     paddingHorizontal: 10, // Horizontal padding for tabs
//     paddingVertical: 5, // Vertical padding for the tab bar
//   },
//   indicator: {

//     backgroundColor: 'white', // Change the tab indicator color
//   },
//   tab: {
//     paddingVertical: 10, // Padding between the tab items
//   },
//   label: {
//     fontSize: 16, // Change the label font size
//     fontWeight: 'bold', // Bold text for tab labels
//     color: '#333', // Tab label color
//   },
// });

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
import Slider from '@react-native-community/slider';
import WheelPicker from 'react-native-wheely';
import TButton from '../../component/TButton';
import CalendarPicker from 'react-native-calendar-picker';
import {Checkbox, RadioButton} from 'react-native-ui-lib';

type Props = {};

// Second tab route with collapsible functionality

const SetupStep6 = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [progress, setProgress] = useState(0.2);

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
        <Text style={tw`text-center text-black text-2xl font-SatoshiBold mt-6`}>
          Which phase of the cycle {'\n'} do you feel you are in right
          {'\n'}now?
        </Text>
        <View style={tw`w-full mt-12`}>
          {selectedLanguage === 'Folicular' ? (
            <View
              style={tw`mt-4 flex-row gap-4 bg-[#4FA8A8] border border-green-600 rounded-3xl p-3`}>
              <RadioButton
                color="green"
                selected={selectedLanguage === 'Folicular'}
                onPress={() => handleRadioButtonLanguage('Folicular')}
              />
              <Text style={tw`text-white font-AvenirLTProBlack text-xl`}>
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
              <Text style={tw`text-gray-400 font-AvenirLTProBlack text-xl`}>
                Folicular (Spring)
              </Text>
            </View>
          )}
          {selectedLanguage === 'Ovulation' ? (
            <View
              style={tw`mt-4 flex-row gap-4 bg-[#4FA8A8] border border-green-600 rounded-3xl p-3`}>
              <RadioButton
                color="green"
                selected={selectedLanguage === 'Ovulation'}
                onPress={() => handleRadioButtonLanguage('Ovulation')}
              />
              <Text style={tw`text-white font-AvenirLTProBlack text-xl`}>
                Ovulation (Summer)
              </Text>
            </View>
          ) : (
            <View
              style={tw`mt-4 flex-row gap-4  border border-gray-400 rounded-3xl p-3`}>
              <RadioButton
                color="gray"
                selected={selectedLanguage === 'Ovulation'}
                onPress={() => handleRadioButtonLanguage('Ovulation')}
              />
              <Text style={tw`text-gray-400 font-AvenirLTProBlack text-xl`}>
                Ovulation (Summer)
              </Text>
            </View>
          )}
          {selectedLanguage === 'Luteal' ? (
            <View
              style={tw`mt-4 flex-row gap-4 bg-[#4FA8A8] border border-green-600 rounded-3xl p-3`}>
              <RadioButton
                color="green"
                selected={selectedLanguage === 'Luteal'}
                onPress={() => handleRadioButtonLanguage('Luteal')}
              />
              <Text style={tw`text-white font-AvenirLTProBlack text-xl`}>
                Luteal (Autumn)
              </Text>
            </View>
          ) : (
            <View
              style={tw`mt-4 flex-row gap-4  border border-gray-400 rounded-3xl p-3`}>
              <RadioButton
                color="gray"
                selected={selectedLanguage === 'Luteal'}
                onPress={() => handleRadioButtonLanguage('Luteal')}
              />
              <Text style={tw`text-gray-400 font-AvenirLTProBlack text-xl`}>
                Luteal (Autumn)
              </Text>
            </View>
          )}
          {selectedLanguage === 'Menstrual' ? (
            <View
              style={tw`mt-4 flex-row gap-4 bg-[#4FA8A8] border border-green-600 rounded-3xl p-3`}>
              <RadioButton
                color="green"
                selected={selectedLanguage === 'Menstrual'}
                onPress={() => handleRadioButtonLanguage('Menstrual')}
              />
              <Text style={tw`text-white font-AvenirLTProBlack text-xl`}>
                Menstrual (Winter)
              </Text>
            </View>
          ) : (
            <View
              style={tw`mt-4 flex-row gap-4  border border-gray-400 rounded-3xl p-3`}>
              <RadioButton
                color="gray"
                selected={selectedLanguage === 'Menstrual'}
                onPress={() => handleRadioButtonLanguage('Menstrual')}
              />
              <Text style={tw`text-gray-400 font-AvenirLTProBlack text-xl`}>
                Menstrual (Winter)
              </Text>
            </View>
          )}
        </View>
      </View>

      <View style={tw`flex-row w-full gap-2 justify-between py-6`}>
        <View>
          <TButton
            onPress={() => navigation.navigate('Drawer')}
            titleStyle={tw`text-[#4FA8A8]`}
            title="Skip"
            containerStyle={tw`bg-[#EAF5F5] h-12`}
          />
        </View>
        <View>
          <TButton
            onPress={() => navigation.navigate('Drawer')}
            title="Continue"
            containerStyle={tw`bg-[#4FA8A8] h-12`}
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
