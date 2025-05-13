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
import { IconLeftArrow } from '../../assets/Icons';
import InputText from '../../component/InputText';
import TButton from '../../component/TButton';
// import WheelPicker from 'react-native-wheely';
import ScrollPicker from "react-native-wheel-scrollview-picker";



const SetupStep3 = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(5);
  const [progress, setProgress] = useState(0.2); // Example progress (20%)
  // const [selectedIndex, setSelectedIndex] = useState(1);
  const dataSource = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
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
            {Math.round(progress * 5) + 2} / 6
          </Text>
        </View>

        {/* Info Text */}

        <Text style={tw`text-center text-[#121221] text-2xl font-SatoshiBold mt-12`}>
          How long Does your Period {'\n'}usually last?
        </Text>

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
                      case 0: return 30;
                      case 1: return 20;
                      case 2: return 15;
                      case 3: return 10;
                      case 4: return 5;
                      default: return 1;
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
            <Text style={tw`text-[#4FA8A8] text-[16px] mt-2 absolute top-[45%] left-[65%]`}>
          Days
        </Text>
        </View>
      


      </View>
      <View style={tw`flex-row w-full gap-2 justify-between py-6`}>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep4')}
            titleStyle={tw`text-[#4FA8A8]`}
            title="Skip"
            containerStyle={tw`bg-[#EAF5F5] rounded-3xl w-[160px] h-12`}
          />
        </View>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep4')}
            title="Continue"
            containerStyle={tw`bg-[#4FA8A8] h-12 w-[160px] rounded-3xl`}
          />
        </View>
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default SetupStep3;

const styles = StyleSheet.create({});
