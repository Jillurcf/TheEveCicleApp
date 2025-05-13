import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import Slider from '@react-native-assets/slider';
import { SvgXml } from 'react-native-svg';
import { IconLeftArrow } from '../../assets/Icons';
import InputText from '../../component/InputText';
import TButton from '../../component/TButton';
import { Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import ScrollPicker from 'react-native-wheel-scrollview-picker';



const SetupStep2 = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0.2); // Example progress (20%)
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(6);
  const [selectedMonth, setSelectedMonth] = useState(9);
  const [selectedYear, setSelectedYear] = useState(2012);

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (2025 - i).toString());


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
            {Math.round(progress * 5) + 1} / 6
          </Text>
        </View>

        {/* Info Text */}

        <Text style={tw`text-center text-[#121221] text-2xl font-SatoshiBold mt-6`}>
          What's your birth date?
        </Text>
        <View style={tw`mt-12 w-full items-center`}>
          <View style={tw`items-center w-[90%]`}>
            <View style={tw`flex-row items-center justify-between w-[85%] mb-6`}>
              <Text style={tw`text-[#3A3A47] text-[16px]`}>Month</Text>
              <Text style={tw`text-[#3A3A47] text-[16px]`}>Day</Text>
              <Text style={tw`text-[#3A3A47] text-[16px]`}>Year</Text>
            </View>
            <View style={tw`flex-row h-100 gap-4 w-full`}>
              <ScrollPicker
                dataSource={months}
                selectedIndex={selectedMonth - 1}
                renderItem={(data, index) => (
                  <Text style={{


                    fontSize: (() => {
                      const distance = Math.abs(index - (selectedMonth - 1));
                      switch (distance) {
                        case 0: return 30;
                        case 1: return 25;
                        case 2: return 20;
                        case 3: return 15;
                        case 4: return 10;
                        case 5: return 5;
                        default: return 1;
                      }
                    })(),
                    fontWeight: index === selectedMonth - 1 ? 'bold' : 'normal',
                    color: index === selectedMonth - 1 ? '#4FA8A8' : '#3A3A47',
                    textAlign: 'center'
                  }}>
                    {data}
                  </Text>
                )}
                onValueChange={(data, index) => setSelectedMonth(Number(data))}
                wrapperHeight={380}
                wrapperBackground="transparent"
                itemHeight={60}
                highlightColor="#84C2C2"
                highlightBorderWidth={2}

                style={{ width: 100 }}
              />

              <ScrollPicker
                dataSource={days}
                selectedIndex={selectedDay - 1}
                renderItem={(data, index) => (
                  <Text style={{
                    fontSize: (() => {
                      const distance = Math.abs(index - (selectedDay - 1));
                      switch (distance) {
                        case 0: return 30;
                        case 1: return 25;
                        case 2: return 20;
                        case 3: return 15;
                        case 4: return 10;
                        case 5: return 5;
                        default: return 1;
                      }
                    })(),
                    fontWeight: index === selectedDay - 1 ? 'bold' : 'normal',
                    color: index === selectedDay - 1 ? '#4FA8A8' : '#000',
                    textAlign: 'center'
                  }}>
                    {data}
                  </Text>
                )}
                onValueChange={(data, index) => setSelectedDay(Number(data))}
                wrapperHeight={380}
                wrapperBackground="transparent"
                itemHeight={60}
                highlightColor="#84C2C2"
                highlightBorderWidth={2}
                style={{ width: 100 }}
              />

              <ScrollPicker
                dataSource={years}
                selectedIndex={years.findIndex(y => parseInt(y) === selectedYear)}
                renderItem={(data, index) => (
                  <Text style={{
                    fontSize: (() => {
                      const distance = Math.abs(parseInt(data) - (selectedYear));
                      switch (distance) {
                        case 0: return 30;
                        case 1: return 25;
                        case 2: return 20;
                        case 3: return 15;
                        case 4: return 10;
                        case 5: return 5;
                        default: return 1;
                      }
                    })(),
                    fontWeight: parseInt(data) === selectedYear ? 'bold' : 'normal',
                    color: parseInt(data) === selectedYear ? '#4FA8A8' : '#000',
                    textAlign: 'center'
                  }}>
                    {data}
                  </Text>
                )}
                onValueChange={(data, index) => setSelectedYear(Number(data))}
                wrapperHeight={380}
                wrapperBackground="transparent"
                itemHeight={60}
                highlightColor="#84C2C2"
                highlightBorderWidth={2}
                style={{ width: 100 }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={tw`flex-row w-full gap-2 justify-between py-6`}>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep3')}
            titleStyle={tw`text-[#4FA8A8]`}
            title="Skip"
            containerStyle={tw`bg-[#EAF5F5] rounded-3xl w-[160px] h-12`}
          />
        </View>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep3')}
            title="Continue"
            containerStyle={tw`bg-[#4FA8A8] h-12 w-[160px] rounded-3xl`}
          />
        </View>
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default SetupStep2;

const styles = StyleSheet.create({});
