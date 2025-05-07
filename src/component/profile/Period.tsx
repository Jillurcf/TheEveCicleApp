import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
  AreaChart,
  XAxis,
  YAxis,
  Grid,
} from 'react-native-svg-charts';
import { Circle } from 'react-native-svg';
import * as shape from 'd3-shape';
import * as d3Scale from 'd3-scale';

const Period = () => {
  const chartWidth = Dimensions.get('window').width - 40;
  const data = [10, 7, 1, 8, 6];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const Decorator = ({ x, y, data }) => {
    return data.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        stroke={'#2c3e50'}
        fill={'#16a085'}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', height: 220 }}>
        {/* Y Axis */}
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fontSize: 10, fill: 'black' }}
          numberOfTicks={6}
          formatLabel={(value)=> `${value} days`}
        />

        {/* Area Chart and X Axis */}
        <View style={{ flex: 1, marginLeft: 10 }}>
          <AreaChart
            style={{ flex: 1 }}
            data={data}
            svg={{ fill: 'rgba(0, 128, 128, 0.4)' }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveLinear}
          >
            <Grid />
            <Decorator />
          </AreaChart>

          <XAxis
            style={{ marginTop: 10 }}
            data={data}
            numberOfTicks={data.length}
            formatLabel={(value, index) => months[index]}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: 'black' }}
            scale={d3Scale.scaleLinear}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding:0,
  },
});

export default Period;
