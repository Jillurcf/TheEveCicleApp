// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { BarChart } from 'react-native-gifted-charts';
// import tw from '../../lib/tailwind';

// type Props = {}

// const CycleLength = (props: Props) => {

//   const data = [
//     { value: 10, label: 'Jan' },
//     { value: 20, label: 'Feb' },
//     {
//       value: 30,
//       label: 'Mar',
//       // topLabelComponent: () => (
//       //   <Text style={{ color: '#84C2C2', fontSize: 8, marginBottom: 6 }}>50</Text>
//       // ),
//     },
//     { value: 20 , label: 'apr', day: 0,

//      },
//     { value: 30, label: 'May', day:5 },
//     { value: 40, label: 'Jun', day: 10 },
//     { value: 30, label: 'Jul', day: 15 },
//     { value: 25, label: 'Aug', day: 20 },
//     { value: 30, label: 'Sep', day: 25 },
//     { value: 10, label: 'Oct', day: 30 },
//     { value: 30, label: 'Nov' },
//     { value: 30, label: 'Dec' },
//   ];
//   return (
//     <View style={{ marginTop: -50, marginLeft: -45,}}>
//       <BarChart
//       yAxisTextStyle={tw`text-[3]`}
//       barStyle={{
        
//       }}
//         stepValue={5}
//         horizontal
//         barWidth={15}
//         width={300} data={data} frontColor="#84C2C2"
//         yAxisThickness={1} // Display y-axis
//         xAxisThickness={1} // Display x-axis
//         labelWidth={0} // Adjust label width for the x-axis labels
//         noOfSections={6} // Set the number of sections on the y-axis
//         formatYLabel={(value)=> `${value}day`}
//         labelsDistanceFromXaxis={1}
//                yAxisLabelContainerStyle={tw``}
        
        
//         />
        
//     </View>
//   )
// }

// export default CycleLength

// const styles = StyleSheet.create({})

import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import tw from '../../lib/tailwind';

const data = [
  { label: 'Jan', value: 2 },
  { label: 'Feb', value: 24 },
  { label: 'Mar', value: 0 },
  { label: 'Apr', value: 10 },
  { label: 'May', value: 30 },
  { label: 'Jun', value: 22 },
  { label: 'Jul', value: 4 },
  { label: 'Aug', value: 6 },
  { label: 'Sep', value: 26 },
  { label: 'Oct', value: 18 },
  { label: 'Nov', value: 3 },
  { label: 'Dec', value: 18 },
];

const MAX_VALUE = 30;
const GRID_DIVISIONS = 6;

const HorizontalBarChart = () => {
  const screenWidth = Dimensions.get('window').width;
  const chartWidth = screenWidth - 175;
  const step = chartWidth / GRID_DIVISIONS;

  return (
    <View style={tw`bg-white h-[850px] p-2`}>
      {/* Top axis labels */}
      <View style={tw`flex-row ml-12 mb-2 border-b border-[#CCCCCC] pb-2`}>
        {[...Array(GRID_DIVISIONS + 1)].map((_, index) => (
          <View key={index} style={{ width: step }}>
            <Text style={tw`text-[10px] text-center text-gray-700`}>
              {index * (MAX_VALUE / GRID_DIVISIONS)} 
            
            </Text>
            <Text style={tw`text-[10px] text-center text-gray-700`}>
            Days
            
            </Text>
          </View>
        ))}
      </View>

      {/* Bars with grid */}
      <ScrollView horizontal={false}>
        {data.map((item, index) => (
          <View key={index} style={tw`flex-row items-center mb-2`}>
            {/* Month label */}
            <Text style={tw`w-8 h-8 text-[12px] text-[#76767E]`}>{item.label}</Text>
            <Text style={tw`mx-1 text-[#76767E]`}>-</Text>

            {/* Chart area */}
            <View
            style={tw`flex-1 h-8 border-l border-[#CCCCCC]`}
           
            
            >
              {/* Bar (rendered first) */}
              <View
                style={[
                  tw` absolute top-0 left-0 h-full bg-[#84C2C2] opacity-70 rounded`,
                  { width: `${(item.value / MAX_VALUE) * 100}%`, zIndex: 1 },
                ]}
              />

              {/* Grid lines (rendered after with lower zIndex) */}
              {[...Array(GRID_DIVISIONS + 1)].map((_, idx) => (
                <View
                  key={idx}
                  style={{
                    position: 'absolute',
                    left: idx * step,
                    height: '100%',
                    width: 1,
                    backgroundColor: '#CCCCCC', // gray-300
                    zIndex: 0,
                  }}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalBarChart;
