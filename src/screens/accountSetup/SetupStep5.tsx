

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
import Svg, { Path, SvgXml } from 'react-native-svg';
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
  const [isSelected, setIsSelected] = useState(false)

  const today = new Date();
const initialDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-15`;
const [selectedStartDate, setSelectedStartDate] = useState(initialDate);



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
  const [loading, isloading] = useState(false);
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

      <View style={tw`w-full rounded-3xl flex-1 items-center `}>
        <View style={[tw``, {}]}>
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
            const isSelected = selectedStartDate === date.dateString;

              return (
                <TouchableOpacity
                  onPress={() => setSelectedStartDate(date.dateString)}
                  style={tw`items-center justify-center mt-1`}
                >
                  <Text
                    style={[
                      tw`text-xs`,
                      state === 'disabled' ? tw`text-gray-300` : isSelected ? tw`text-[#4FA8A8] font-SatoshiBold` : tw`text-black`,
                    ]}
                  >
                    {date.day}
                  </Text>


                  <View style={tw`mt-1 ${isSelected ? "bg-[#84C2C2]" : "bg-transparent"} rounded-full`}>
                    {isSelected ? (
                      <Svg width={20} height={20} viewBox="0 0 28 28" fill="none">
                        <Path
                          d="M20.0722 10.1239C20.2264 10.2783 20.313 10.4876 20.313 10.7059C20.313 10.9241 20.2264 11.1334 20.0722 11.2878L12.3859 18.9741C12.2315 19.1283 12.0222 19.215 11.8039 19.215C11.5857 19.215 11.3764 19.1283 11.222 18.9741L7.92785 15.68C7.78238 15.5239 7.70318 15.3174 7.70695 15.104C7.71071 14.8907 7.79714 14.6871 7.94803 14.5363C8.09891 14.3854 8.30247 14.2989 8.51582 14.2952C8.72917 14.2914 8.93565 14.3706 9.09177 14.5161L11.8039 17.2269L18.9082 10.1239C19.0626 9.9697 19.272 9.88307 19.4902 9.88307C19.7084 9.88307 19.9177 9.9697 20.0722 10.1239ZM28 14C28 16.7689 27.1789 19.4757 25.6406 21.778C24.1022 24.0803 21.9157 25.8747 19.3576 26.9343C16.7994 27.9939 13.9845 28.2712 11.2687 27.731C8.553 27.1908 6.05844 25.8574 4.10051 23.8995C2.14258 21.9416 0.809205 19.447 0.269012 16.7313C-0.271181 14.0155 0.00606574 11.2006 1.06569 8.64243C2.12532 6.08427 3.91973 3.89776 6.22202 2.35942C8.52431 0.821085 11.2311 0 14 0C17.7117 0.00435901 21.2701 1.48075 23.8947 4.10532C26.5192 6.72988 27.9956 10.2883 28 14ZM26.3529 14C26.3529 11.5568 25.6285 9.1685 24.2711 7.13707C22.9137 5.10564 20.9845 3.52233 18.7273 2.58737C16.4701 1.65241 13.9863 1.40778 11.5901 1.88442C9.19383 2.36106 6.99275 3.53756 5.26516 5.26515C3.53757 6.99274 2.36106 9.19382 1.88442 11.5901C1.40778 13.9863 1.65241 16.4701 2.58738 18.7273C3.52234 20.9845 5.10565 22.9137 7.13708 24.2711C9.16851 25.6284 11.5568 26.3529 14 26.3529C17.2751 26.3493 20.415 25.0467 22.7308 22.7308C25.0467 20.415 26.3493 17.2751 26.3529 14Z"
                          fill="white"
                        />
                      </Svg>
                    ) : <Svg width={20} height={20} viewBox="0 0 28 28" fill="none">
                      <Path
                        d="M20.0722 10.1239C20.2264 10.2783 20.313 10.4876 20.313 10.7059C20.313 10.9241 20.2264 11.1334 20.0722 11.2878L12.3859 18.9741C12.2315 19.1283 12.0222 19.215 11.8039 19.215C11.5857 19.215 11.3764 19.1283 11.222 18.9741L7.92785 15.68C7.78238 15.5239 7.70318 15.3174 7.70695 15.104C7.71071 14.8907 7.79714 14.6871 7.94803 14.5363C8.09891 14.3854 8.30247 14.2989 8.51582 14.2952C8.72917 14.2914 8.93565 14.3706 9.09177 14.5161L11.8039 17.2269L18.9082 10.1239C19.0626 9.9697 19.272 9.88307 19.4902 9.88307C19.7084 9.88307 19.9177 9.9697 20.0722 10.1239ZM28 14C28 16.7689 27.1789 19.4757 25.6406 21.778C24.1022 24.0803 21.9157 25.8747 19.3576 26.9343C16.7994 27.9939 13.9845 28.2712 11.2687 27.731C8.553 27.1908 6.05844 25.8574 4.10051 23.8995C2.14258 21.9416 0.809205 19.447 0.269012 16.7313C-0.271181 14.0155 0.00606574 11.2006 1.06569 8.64243C2.12532 6.08427 3.91973 3.89776 6.22202 2.35942C8.52431 0.821085 11.2311 0 14 0C17.7117 0.00435901 21.2701 1.48075 23.8947 4.10532C26.5192 6.72988 27.9956 10.2883 28 14ZM26.3529 14C26.3529 11.5568 25.6285 9.1685 24.2711 7.13707C22.9137 5.10564 20.9845 3.52233 18.7273 2.58737C16.4701 1.65241 13.9863 1.40778 11.5901 1.88442C9.19383 2.36106 6.99275 3.53756 5.26516 5.26515C3.53757 6.99274 2.36106 9.19382 1.88442 11.5901C1.40778 13.9863 1.65241 16.4701 2.58738 18.7273C3.52234 20.9845 5.10565 22.9137 7.13708 24.2711C9.16851 25.6284 11.5568 26.3529 14 26.3529C17.2751 26.3493 20.415 25.0467 22.7308 22.7308C25.0467 20.415 26.3493 17.2751 26.3529 14Z"
                        fill="#9E9EA4"
                      />
                    </Svg>}

                  </View>


                </TouchableOpacity>
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
            renderHeader={(date) => {
              const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];

              const parsedDate = new Date(date);
              const month = parsedDate.getMonth();
              const year = parsedDate.getFullYear();

              return (
                <View style={[tw`pb-2 mb-2 border-b w-full border-gray-200 items-center`]}>
                  <Text style={[tw`text-[16px] text-gray-500 font-bold`]}>
                    {monthNames[month]}
                  </Text>
                </View>
              );
            }}



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
