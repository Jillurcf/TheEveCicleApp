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
import React, { useState } from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { IconLeftArrow } from '../../assets/Icons';
// import Slider from '@react-native-community/slider';
import Slider from '@react-native-assets/slider';
import WheelPicker from 'react-native-wheely';
import TButton from '../../component/TButton';
import { Layout } from 'react-native-reanimated';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

type Props = {};

// Second tab route with collapsible functionality

const SetupStep4 = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [progress, setProgress] = useState(0.6);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(5);
  const [selectedIndex1, setSelectedIndex1] = useState(3);

  // const [selectedIndex, setSelectedIndex] = useState(1);
  const dataSource1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  const dataSource = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

  const FirstRoute = () => (
    <View style={tw``}>
      <View style={tw` w-[40%] mt-12 flex justify-center mx-auto h-96 relative`}>
        <ScrollPicker
          dataSource={dataSource}
          selectedIndex={selectedIndex}
          renderItem={(data, index) => (
            <Text
              style={{
                fontWeight: index === selectedIndex ? "bold" : "normal",
                // fontSize: index === selectedIndex ?  30 : 20,
                fontSize: (() => {
                  const distance = Math.abs(index - (selectedIndex));
                  switch (distance) {
                    case 0: return 40;
                    case 1: return 35;
                    case 2: return 30;
                    case 3: return 25;
                    case 4: return 20;
                    default: return 15;
                  }
                })(),

                color: index === selectedIndex ? "#4FA8A8" : "black",
                textAlign: "center",
              }}
            >
              {data}
            </Text>
          )}
          onValueChange={(data, index) => {
            setSelectedIndex(index);
          }}
          wrapperHeight={380}
          wrapperBackground="transparent"
          itemHeight={60}
          highlightColor="#84C2C2"

          highlightBorderWidth={1}
        />
        <Text style={tw`text-[#4FA8A8] text-[16px] mt-2 absolute top-[45%] left-[70%]`}>
          Days
        </Text>
      </View>

    </View>
  );

  const SecondRoute = () => (
    <View style={tw``}>
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw` w-[40%] mt-12 flex justify-center mx-auto h-96 relative`}>
          <ScrollPicker
            dataSource={dataSource1}
            selectedIndex={selectedIndex1}
            renderItem={(data, index) => (
              <Text
                style={{
                  fontWeight: index === selectedIndex1 ? "bold" : "normal",
                  // fontSize: index === selectedIndex ?  30 : 20,
                  fontSize: (() => {
                    const distance = Math.abs(index - (selectedIndex1));
                    switch (distance) {
                      case 0: return 40;
                      case 1: return 35;
                      case 2: return 30;
                      case 3: return 25;
                      case 4: return 20;
                      default: return 15;
                    }
                  })(),

                  color: index === selectedIndex1 ? "#4FA8A8" : "black",
                  textAlign: "center",
                }}
              >
                {data}
              </Text>
            )}
            onValueChange={(data, index) => {
              setSelectedIndex1(index);
            }}
            wrapperHeight={380}
            wrapperBackground="transparent"
            itemHeight={50}
            highlightColor="#84C2C2"

            highlightBorderWidth={1}
          />
        <View style={tw`border-[#4FA8A8] border-b-2 w-6 h-2 mt-2 absolute sm:top-[45%] md:top-[45%] md:left-[110%] sm:left-[110%]`}></View>
        </View>
        <View style={tw` w-[40%] mt-12 flex justify-center mx-auto h-96 relative`}>
          <ScrollPicker
            dataSource={dataSource}
            selectedIndex={selectedIndex}
            renderItem={(data, index) => (
              <Text
                style={{
                  fontWeight: index === selectedIndex ? "bold" : "normal",
                  // fontSize: index === selectedIndex ?  30 : 20,
                  fontSize: (() => {
                    const distance = Math.abs(index - (selectedIndex));
                    switch (distance) {
                      case 0: return 40;
                      case 1: return 35;
                      case 2: return 30;
                      case 3: return 25;
                      case 4: return 20;
                      default: return 15;
                    }
                  })(),

                  color: index === selectedIndex ? "#4FA8A8" : "black",
                  textAlign: "center",
                }}
              >
                {data}
              </Text>
            )}
            onValueChange={(data, index) => {
              setSelectedIndex(index);
            }}
            wrapperHeight={380}
            wrapperBackground="transparent"
            itemHeight={50}
            highlightColor="#84C2C2"

            highlightBorderWidth={1}
          />
          <Text style={tw`text-[#4FA8A8] text-[16px] mt-2 absolute top-[45%] left-[70%]`}>
            Days
          </Text>
        </View>
      </View>
    </View>
  );
  const routes = [
    { key: 'first', title: 'Regular' },
    { key: 'second', title: 'Irregular' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        return <SecondRoute />;
      default:
        return null;
    }
  };

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
            trackStyle={{ height: 8, borderRadius: 4, }}
          />
          <Text style={tw`text-gray-600 text-sm`}>
            {Math.round(progress * 5) + 1} / 6
          </Text>
        </View>
        <Text style={tw`text-center text-black text-2xl font-SatoshiBold my-8`}>
          How long does your cycle {'\n'} usually last?
        </Text>
        <View style={tw`flex-1`}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Layout.width }}
            renderTabBar={(props) => (
              <View style={tw`flex-row bg-[#7676801F] p-0.5 items-center justify-center rounded-lg`}>
                {props.navigationState.routes.map((route, i) => {
                  const isActive = props.navigationState.index === i;
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => props.jumpTo(route.key)}
                      style={tw.style(
                        `flex-1 items-center py-2 px-2`,
                        isActive ? `bg-[#FFFFFF]` : `bg-[#7676801F]`,
                        isActive ? `rounded-lg` : ``
                      )}
                    >
                      <Text
                        style={tw.style(
                          `text-xs font-SatoshiBold`,
                          isActive ? `text-[#121221]` : `text-[#121221]`
                        )}
                      >
                        {route.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          />
        </View>
        <View style={tw`flex-row w-full gap-2 justify-between py-6`}>
          <View>
            <TButton
              onPress={() => navigation.navigate('SetupStep5')}
              titleStyle={tw`text-[#4FA8A8]`}
              title="Skip"
              containerStyle={tw`bg-[#EAF5F5] rounded-3xl w-[160px] h-12`}
            />
          </View>
          <View>
            <TButton
              onPress={() => navigation.navigate('SetupStep5')}
              title="Continue"
              containerStyle={tw`bg-[#4FA8A8] h-12 w-[160px] rounded-3xl`}
            />
          </View>
        </View>

      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default SetupStep4;

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
