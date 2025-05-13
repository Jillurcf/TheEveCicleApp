import React, { useState } from 'react';
import { View, Text } from 'react-native';
import WheelPickerExpo from 'react-native-wheel-picker-expo';

const months = [...Array(12)].map((_, i) => (i + 1).toString().padStart(2, '0'));
const days = [...Array(31)].map((_, i) => (i + 1).toString().padStart(2, '0'));
const years = [...Array(40)].map((_, i) => (1990 + i).toString());

export default function BirthDatePicker() {
  const [selectedMonth, setSelectedMonth] = useState(11); // December
  const [selectedDay, setSelectedDay] = useState(24);
  const [selectedYear, setSelectedYear] = useState(5); // 1995

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#EAF8F8' }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }}>
        What's your birth date?
      </Text>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20 }}>
        {/* Labels */}
        <Text style={{ fontSize: 16, textAlign: 'center' }}>Month</Text>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>Day</Text>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>Year</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20 }}>
        {/* Month Picker */}
        <WheelPickerExpo
          height={200}
          width={100}
          selectedIndex={selectedMonth}
          options={months}
          onChange={({ index }) => setSelectedMonth(index)}
          style={{ backgroundColor: 'transparent' }}
          selectedStyle={{ color: '#2DA6A6', fontSize: 20 }}
        />

        {/* Day Picker */}
        <WheelPickerExpo
          height={200}
          width={100}
          selectedIndex={selectedDay}
          options={days}
          onChange={({ index }) => setSelectedDay(index)}
          style={{ backgroundColor: 'transparent' }}
          selectedStyle={{ color: '#2DA6A6', fontSize: 20 }}
        />

        {/* Year Picker */}
        <WheelPickerExpo
          height={200}
          width={100}
          selectedIndex={selectedYear}
          options={years}
          onChange={({ index }) => setSelectedYear(index)}
          style={{ backgroundColor: 'transparent' }}
          selectedStyle={{ color: '#2DA6A6', fontSize: 20 }}
        />
      </View>
    </View>
  );
}
