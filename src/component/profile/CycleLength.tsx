import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts';
import tw from '../../lib/tailwind';

type Props = {}

const CycleLength = (props: Props) => {

  const data = [
    { value: 10, label: 'Jan' },
    { value: 20, label: 'Feb' },
    {
      value: 30,
      label: 'Mar',
      // topLabelComponent: () => (
      //   <Text style={{ color: '#84C2C2', fontSize: 8, marginBottom: 6 }}>50</Text>
      // ),
    },
    { value: 20 , label: 'apr' },
    { value: 30, label: 'May' },
    { value: 40, label: 'Jun' },
    { value: 30, label: 'Jul' },
    { value: 25, label: 'Aug' },
    { value: 30, label: 'Sep' },
    { value: 10, label: 'Oct' },
    { value: 30, label: 'Nov' },
    { value: 30, label: 'Dec' },
  ];
  return (
    <View style={{ marginTop: -50, marginLeft: -40 }}>
      <BarChart
      barStyle={{
        
      }}
        stepValue={10}
        horizontal
        barWidth={15}
        width={300} data={data} frontColor="#84C2C2"
        yAxisThickness={1} // Display y-axis
        xAxisThickness={1} // Display x-axis
        labelWidth={6} // Adjust label width for the x-axis labels
        noOfSections={6} // Set the number of sections on the y-axis
        formatYLabel={(value)=> `${value}day`}
        yAxisLabelContainerStyle={tw``}
        
        
        />
        
    </View>
  )
}

export default CycleLength

const styles = StyleSheet.create({})