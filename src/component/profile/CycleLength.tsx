import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {BarChart} from 'react-native-gifted-charts';

type Props = {}

const CycleLength = (props: Props) => {
    const data = [
        {value: 20, label: 'M'},
        {value: 60, label: 'T'},
        {
          value: 40,
          label: 'W',
          topLabelComponent: () => (
            <Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>50</Text>
          ),
        },
        {value: 40, label: 'T'},
        {value: 30, label: 'F'},
      ];
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
    <BarChart
    
    width={300} data={data} frontColor="#177AD5" />
  </View>
  )
}

export default CycleLength

const styles = StyleSheet.create({})