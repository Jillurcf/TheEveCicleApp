import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  PanResponder,
  Animated,
} from "react-native";
import Svg, { Circle, G, Image } from "react-native-svg";
import DayPicker from "./CustomCalender";
import tw from "../../lib/tailwind";
import LinearGradient from "react-native-linear-gradient";


const OvulationCircle: React.FC = () => {
  const totalCircles = 31;
  const circumference = 220; // Circumference of the circle
  const radius = circumference / (1 * Math.PI); // Radius calculation

  const rotationAnim = useRef(new Animated.Value(0)).current; // Track rotation
  const [rotation, setRotation] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1); // Default selected day to 1

  const updateRotation = (day: number) => {
    const angle = (day / totalCircles) * 360;
    setRotation(angle);
    rotationAnim.setValue(angle);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const { moveX, moveY } = gestureState;
        const centerX = 150;
        const centerY = 150;

        const dx = moveX - centerX;
        const dy = moveY - centerY;

        const calculatedAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        const normalizedAngle = (calculatedAngle + 360) % 360; // Normalize angle to 0-360
        setRotation(normalizedAngle);
        rotationAnim.setValue(normalizedAngle);

        const dayIndex = Math.floor((normalizedAngle / 360) * totalCircles);
        setSelectedDay(dayIndex > 0 ? dayIndex : totalCircles);
      },
    })
  ).current;

  const animatedRotation = rotationAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const imagePaths = [
    require("../../assets/Imgages/Yellow-fullMoon.png"),
    require("../../assets/Imgages/yl1.png"),
    require("../../assets/Imgages/red-r1.png"),
    require("../../assets/Imgages/red-r2.png"),
    require("../../assets/Imgages/pink-r1.png"),
    require("../../assets/Imgages/pink-r2.png"),
    require("../../assets/Imgages/pink-r3.png"),
    require("../../assets/Imgages/pink-r4.png"),
    require("../../assets/Imgages/pink-r5.png"),
    require("../../assets/Imgages/wr1.png"),
    require("../../assets/Imgages/wr2.png"),
    require("../../assets/Imgages/wr-3.png"),
    require("../../assets/Imgages/wr4.png"),
    require("../../assets/Imgages/wr5.png"),
    require("../../assets/Imgages/gr1.png"),
    require("../../assets/Imgages/gr2.png"),
    require("../../assets/Imgages/yl14.png"),
    require("../../assets/Imgages/yl13.png"),
    require("../../assets/Imgages/yl12.png"),
    require("../../assets/Imgages/yl11.png"),
    require("../../assets/Imgages/yl10.png"),
    require("../../assets/Imgages/yl9.png"),
    require("../../assets/Imgages/yl8.png"),
    require("../../assets/Imgages/yl7.png"),
    require("../../assets/Imgages/yl6.png"),
    require("../../assets/Imgages/yl5.png"),
    require("../../assets/Imgages/yl4.png"),
    require("../../assets/Imgages/yl3.png"),
    require("../../assets/Imgages/yl2.png"),
    require("../../assets/Imgages/yl1.png"),
    require("../../assets/Imgages/yl1.png"),
  ];

  return (
    <LinearGradient
      colors={["#0B3434", "#207272", "#A8D4D41A"]} // Gradient colors
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={tw`flex-1 items-center`}
    >
      <StatusBar translucent={false} />

      {/* SVG Circle */}
      <View {...panResponder.panHandlers}>
        <Svg height="420" width="490" viewBox="0 0 300 300">
          <Animated.View
            style={[
              tw`absolute left-[75px] top-[25px]`,
              { transform: [{ rotate: animatedRotation }] },
            ]}
          >
            <Svg height="340" width="340" viewBox="0 0 150 150">
              <G origin="75, 75">
                {/* Static Background Circle */}
                <Circle cx="75" cy="75" r={radius} strokeWidth="1" fill="none" />

                {/* Progress Circles */}
                {[...Array(totalCircles)].map((_, index) => {
                  const angle = (index * 360) / totalCircles;
                  return (
                    <Image
                      key={index}
                      x={75 + Math.cos((angle * Math.PI) / 180) * radius - 5}
                      y={75 + Math.sin((angle * Math.PI) / 180) * radius - 5}
                      width={10}
                      height={10}
                      href={imagePaths[index]}
                    />
                  );
                })}
              </G>
            </Svg>
          </Animated.View>

          {/* Fixed Circle at the Bottom */}
          <Circle
            cx="144"
            cy={183 + radius}
            r={14}
            strokeOpacity={"10%"}
            strokeWidth={5}
            stroke="#E6F2F2"
            fill="white"
          />
        </Svg>
      </View>

      {/* Text Content */}
      <View style={tw`absolute top-[15%] items-center`}>
        <Text style={tw`text-lg font-semibold text-white`}>Ovulation Cycle</Text>
        <Text style={tw`text-white text-base font-bold mt-6`}>
          <Text style={tw`text-[25px] font-bold`}>{selectedDay}th</Text> Day
        </Text>
        <Text style={tw`text-white text-sm text-center max-w-[250px] mt-2`}>
          High chance of getting pregnant
        </Text>

        {/* Log Period Button */}
        <TouchableOpacity style={tw`mt-5 border-2 border-white px-8 py-3 rounded-full bg-[#FF6B6B]`}>
          <Text style={tw`text-white text-base font-medium`}>Log Period</Text>
        </TouchableOpacity>
      </View>

      {/* Day Picker */}
      {/* <View style={tw` w-full mt-auto`}> */}
        <DayPicker selectedDay={selectedDay} onDaySelect={updateRotation} rotation={rotation} />
      {/* </View> */}
      <View>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </View>
    </LinearGradient>
  );
};

export default OvulationCircle;
