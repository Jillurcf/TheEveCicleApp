import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import tw from '../lib/tailwind';


const MyInteractiveCalendar = () => {
  const [selectedDates, setSelectedDates] = useState<Record<string, boolean>>({});

  const toggleDate = (day: any) => {
    const date = day.dateString;

    setSelectedDates((prev) => {
      const newDates = { ...prev };
      if (newDates[date]) {
        delete newDates[date];
      } else {
        newDates[date] = true;
      }
      return newDates;
    });
  };

  return (
    <View {...tw`bg-white rounded-lg p-2`}>
      <Calendar
        markingType="custom"
        onDayPress={toggleDate}
        dayComponent={({ date, state }) => {
          const isSelected = selectedDates[date.dateString];

          return (
            <TouchableOpacity onPress={() => toggleDate({ dateString: date.dateString })}>
              <View {...tw`w-10 h-10 items-center justify-center relative`}>
                <View
                  {...tw`w-10 h-10 rounded-full items-center justify-center ${
                    isSelected ? 'bg-red-700' : ''
                  }`}
                >
                  <Text
                    {...tw`text-sm ${
                      state === 'disabled'
                        ? 'text-gray-400'
                        : isSelected
                        ? 'text-white'
                        : 'text-black'
                    }`}
                  >
                    {date.day}
                  </Text>
                </View>

                {isSelected && (
                  <Image
                    source={require('../assets/Imgages/AddLogs/MyVirginalDischarge/StrongOdour.png')}
                    style={{
                      width: 25,
                      height: 25,
                      position: 'absolute',
                      top: -5,
                     
                      right: 0,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        }}
        theme={{
          calendarBackground: 'white',
          todayTextColor: '#00adf5',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
        }}
      />
    </View>
  );
};

export default MyInteractiveCalendar;
