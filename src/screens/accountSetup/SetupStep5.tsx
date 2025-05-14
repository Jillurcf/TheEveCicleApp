

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
import { IconLeftArrow, IconTickMark } from '../../assets/Icons';
import Slider from '@react-native-assets/slider';
import WheelPicker from 'react-native-wheely';
import TButton from '../../component/TButton';
// import CalendarPicker from 'react-native-calendar-picker';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import IconArrow from '../../component/IconArrow';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HIEGHT = Dimensions.get('window').height;
type Props = {};

// Second tab route with collapsible functionality

const SetupStep5 = ({ navigation }: { navigation: any }) => {
  const [index, setIndex] = React.useState(0);
  const [progress, setProgress] = useState(0.8);
  // const [selectedStartDate, setSelectedStartDate] = useState(null);

  // const onDateChange = (date: any) => {
  //   setSelectedStartDate(date);
  // };

  // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const [selectedStartDate, setSelectedStartDate] = useState(null);



  const onDateChange = (date) => {
    const formatted = date ? moment(date).format('YYYY-MM-DD') : '';
    setSelectedStartDate(formatted);
  };

  // Example marked dates from image
  const markedDates = [
    '2022-09-01', '2022-09-02', '2022-09-03',
    '2022-09-04', '2022-09-05', '2022-09-06', '2022-09-07', '2022-09-08', '2022-09-09', '2022-09-10',
    '2022-09-11', '2022-09-12', '2022-09-13', '2022-09-14', '2022-09-15',
    '2022-09-18', '2022-09-19', '2022-09-20', '2022-09-21', '2022-09-22', '2022-09-23', '2022-09-24',
    '2022-09-25', '2022-09-26', '2022-09-27', '2022-09-28', '2022-09-29', '2022-09-30'
  ];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  // =======or======
  // const formatted = moment(date).format('MMMM YYYY');
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
            step={0.05}
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
        <Text style={tw`text-center text-black text-2xl font-SatoshiBold my-6`}>
          When did your last period {'\n'} start?
        </Text>
      </View>

      {/* <View style={tw`bg-white rounded-2xl w-[105%] pt-20 p-4`}>
        <CalendarPicker
        
        onDateChange={onDateChange} />
        <View style={tw`mt-4`}>
          <Text style={tw`text-lg font-bold `}>SELECTED DATE: {startDate}</Text>
        </View>
      </View> */}
      <View style={tw`w-full rounded-3xl flex-1 items-center `}>
        <View style={[tw``, { }]}>
          <CalendarList
            horizontal={false}
            pagingEnabled
            calendarWidth={SCREEN_WIDTH - 32}
            // calendarHeight={SCREEN_HIEGHT - 200}
            calendarHeight={370}
            onDayPress={(day) => {
              console.log('selected day', day.dateString);
              setSelectedStartDate(day.dateString);
            }}
            theme={{
              backgroundColor: 'transparent',
              calendarBackground: 'transparent',
              selectedDayBackgroundColor: '#2dd4bf',
              todayTextColor: '#2dd4bf',
              dayTextColor: '#3A3A47',
              arrowColor: '#2dd4bf',
              monthTextColor: '#76767E',
              textMonthFontWeight: 'bold',
              textDayFontWeight: '200',
              textDayFontSize: 20,
              textMonthFontSize: 16,
              
            }}
            style={{
              width: "100%",
              padding: 8,
            }}
            markedDates={{
              '2025-05-16': {
                selected: true,
                selectedColor: '#2dd4bf',
              },
              '2025-05-15': {
                marked: true,
                dotColor: 'gray',
              },
            }}
            
            dayComponent={({ date, state }) => {
              return (
                <View style={tw`items-center justify-center mt-1`}>
                  <Text
                    style={[
                      tw`text-xs`,
                      state === 'disabled' ? tw`text-gray-300` : tw`text-black`,
                    ]}
                  >
                    {date.day}
                  </Text>
                  <View style={tw`mt-1`}>
                    <SvgXml xml={IconTickMark} width={20} height={20} />
                  </View>
                </View>
              );
            }}
            calendarStyle={{
              marginBottom: 20, // space between months
              backgroundColor: '#fff',
              borderRadius: 16,
              padding: 10,
              shadowColor: '',
              shadowOffset: { width: 10, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 0,
              elevation: 3,
              
            }}
            // customHeader={({ month, year }) => {
            //   const monthNames = [
            //     "January", "February", "March", "April", "May", "June",
            //     "July", "August", "September", "October", "November", "December"
            //   ];
            
            //   return (
            //     <View style={[tw`pb-2 mb-2 border-b border-gray-200 items-center`]}>
            //       <Text style={[tw`text-[16px] text-gray-500 font-bold`]}>
            //         {monthNames[month]} {year}
            //       </Text>
            //     </View>
            //   );
            // }}
            
            
          />
        </View>

      </View>
      <View style={tw`flex-row w-full gap-2 justify-between py-6`}>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep6')}
            titleStyle={tw`text-[#4FA8A8]`}
            title="Skip"
            containerStyle={tw`bg-[#EAF5F5] rounded-3xl w-[160px] h-12`}
          />
        </View>
        <View>
          <TButton
            onPress={() => navigation.navigate('SetupStep6')}
            title="Continue"
            containerStyle={tw`bg-[#4FA8A8] h-12 w-[160px] rounded-3xl`}
          />
        </View>
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default SetupStep5;

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
