import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import tw from '../lib/tailwind';


const HormoneChart = () => {
  const width = 420;
  const height = 120;

  // Hormone data wave paths (Mock paths, adjust for accuracy)
  const hormones = [
    { name: 'Estrogen', color: '#4CAF50', path: 'M 0 100 Q 50 50, 100 100 T 200 100 T 300 100 T 400 100' },
    { name: 'Progesterone', color: '#8E24AA', path: 'M 0 120 Q 50 80, 100 120 T 200 120 T 300 120 T 400 120' },
    { name: 'Testosterone', color: '#E53935', path: 'M 0 140 Q 50 90, 100 140 T 200 140 T 300 140 T 400 140' },
    { name: 'LH', color: '#FFB300', path: 'M 0 160 Q 50 110, 100 160 T 200 160 T 300 160 T 400 160' },
  ];

  return (
    <View style={tw`flex items-center mt-4`}>
      <Svg width={width} height={height} viewBox="0 0 400 200">
        <Defs>
          {hormones.map((hormone, index) => (
            <LinearGradient id={`grad${index}`} key={index} x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor={hormone.color} stopOpacity="0.7" />
              <Stop offset="100%" stopColor={hormone.color} stopOpacity="0.2" />
            </LinearGradient>
          ))}
        </Defs>

        {hormones.map((hormone, index) => (
          <Path key={index} d={hormone.path} fill={`url(#grad${index})`} stroke={hormone.color} strokeWidth="2" />
        ))}
      </Svg>

      {/* Legend */}
      <View style={tw`flex-row gap-2 mt-2`}>
        {hormones.map((hormone, index) => (
          <View key={index} style={tw`flex-row items-center`}>
            <View style={[tw`w-3 h-3 rounded-full`, { backgroundColor: hormone.color }]} />
            <Text style={tw`ml-2 text-sm text-gray-700`}>{hormone.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HormoneChart;
