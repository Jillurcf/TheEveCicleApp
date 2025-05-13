import React, { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from '../../lib/tailwind';

const months = [...Array(12)].map((_, i) => (i + 1).toString().padStart(2, '0'));
const days = [...Array(31)].map((_, i) => (i + 1).toString().padStart(2, '0'));
const years = [...Array(40)].map((_, i) => (1990 + i).toString());

export default function DatePicker() {
  const [selectedMonth, setSelectedMonth] = useState('12'); // December
  const [selectedDay, setSelectedDay] = useState('25'); // 25
  const [selectedYear, setSelectedYear] = useState('1995'); // 1995

  return (
    <View style={tw`flex-1 justify-center items-center bg-teal-100`}>
      <Text style={tw`text-xl font-bold text-center mb-4`}>What's your birth date?</Text>

      {/* Header Row */}
      <View style={tw`flex-row justify-between w-full px-10 mb-2`}>
        <Text style={tw`text-center text-gray-600 text-sm`}>Month</Text>
        <Text style={tw`text-center text-gray-600 text-sm`}>Day</Text>
        <Text style={tw`text-center text-gray-600 text-sm`}>Year</Text>
      </View>

      {/* Pickers */}
      <View style={tw`flex-row w-full px-10 justify-between items-center`}>

        {/* Month Picker */}
        <Picker
          selectedValue={selectedMonth}
          onValueChange={(itemValue) => setSelectedMonth(itemValue)}
          style={[
            tw`w-20 h-48`,
            Platform.OS === 'android' && { color: '#2DA6A6' },
          ]}
          itemStyle={{ color: '#2DA6A6', fontSize: 20, height: 120 }}
        >
          {months.map((month, index) => (
            <Picker.Item key={index} label={month} value={month} />
          ))}
        </Picker>

        {/* Day Picker */}
        <Picker
          selectedValue={selectedDay}
          onValueChange={(itemValue) => setSelectedDay(itemValue)}
          style={[
            tw`w-20 h-48`,
            Platform.OS === 'android' && { color: '#2DA6A6' },
          ]}
          itemStyle={{ color: '#2DA6A6', fontSize: 20, height: 120 }}
        >
          {days.map((day, index) => (
            <Picker.Item key={index} label={day} value={day} />
          ))}
        </Picker>

        {/* Year Picker */}
        <Picker
          selectedValue={selectedYear}
          onValueChange={(itemValue) => setSelectedYear(itemValue)}
          style={[
            tw`w-24 h-48`,
            Platform.OS === 'android' && { color: '#2DA6A6' },
          ]}
          itemStyle={{ color: '#2DA6A6', fontSize: 20, height: 120 }}
        >
          {years.map((year, index) => (
            <Picker.Item key={index} label={year} value={year} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
