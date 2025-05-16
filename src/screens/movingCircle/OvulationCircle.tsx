import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  PanResponder,
  Animated,
  ImageBackground,
  ScrollView,
} from "react-native";
import Svg, { Circle, G, Image, SvgXml } from "react-native-svg";
import DayPicker from "./CustomCalender";
import tw from "../../lib/tailwind";
import LinearGradient from "react-native-linear-gradient";
import HormoneChart from "../../component/HomeChart";
import Header from "../../component/Header";
import IconArrow from "../../component/IconArrow";
import { IconBell } from "../../assets/Icons";
import CheckInList from "../../component/MyCheckIntoday";
import SeasonInsights from "../../component/SeasonInsights";
import MoonPahseTody from "../../component/MoonPahseTody";


const OvulationCircle: React.FC = ({ navigation }) => {
  const totalCircles = 31;
  const circumference = 220; // Circumference of the circle
  const radius = circumference / (1 * Math.PI); // Radius calculation

  const rotationAnim = useRef(new Animated.Value(0)).current; // Track rotation
  const [rotation, setRotation] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1); // Default selected day to 1
  const [selectedTab, setSelectedTab] = useState("Ovulation");

  const tabs = ["Menstrual", "Follicular", "Ovulation", "Luteal"];
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
    //  require("../../assets/Imgages/wr6.png"),
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
    <ScrollView>
      <LinearGradient
        colors={["#0B3434", "#207272", "#FFFFFFFF"]} // Gradient colors
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={tw`items-center w-full`}
      >
        <StatusBar translucent={false} />
        <View style={tw`w-full px-[4%]`}>
          <Header />
        </View>
        {/* SVG Circle */}
        <View {...panResponder.panHandlers}>
          <Svg height="490" width="490" viewBox="0 0 300 300">
            <Animated.View
              style={[
                tw`absolute left-[75px]`,
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
              cx="148"
              cy={131 + radius}
              r={10}
              strokeOpacity={"10%"}
              strokeWidth={2}
              stroke="#FFFFFFFF"
              fill="transparent"
            />
          </Svg>
        </View>

        {/* Text Content */}
        <View style={tw`absolute top-[22%] items-center`}>
          <Text style={tw` text-[20px] font-SatoshiRegular text-white`}>Current session</Text>
          <Text style={tw`text-[28px] font-SatoshiRegular mt-1 text-white`}>Summer . Ovulation</Text>
          {/* <Text style={tw`text-white text-base font-bold mt-6`}>
        <Text style={tw`text-[25px] font-bold`}>{selectedDay}th</Text> Day
      </Text> */}
          <Text style={tw`text-white text-[20px]  font-SatoshiRegular text-center max-w-[250px] mt-5`}>
            Next period in 12 days
          </Text>

          {/* Log Period Button */}
          <View style={tw`mt-8 w-24 h-10 border-2 justify-center font-SatoshiBold border-white rounded-3xl bg-[#E7E7E9]`}>
            <Text style={tw`text-[#4FA8A8] text-center items-center font-SatoshiBold`}>Log Period</Text>
          </View>
        </View>

        <View style={tw`flex-row bottom-32 justify-between rounded-3xl px-[4%]`}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={tw`flex-1 py-2 mx-1 rounded-3xl ${selectedTab === tab ? "bg-[#1E6969] " : "bg-gray-200"
                }`}
              onPress={() => setSelectedTab(tab)}
            >
              <Text
                style={tw`text-center px-1 font-semibold ${selectedTab === tab ? "text-white" : "text-[#4FA8A8]"
                  }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Day picker */}

        <DayPicker selectedDay={selectedDay} onDaySelect={updateRotation} rotation={rotation} />

        <View style={tw`flex-row -mt-10 gap-4`}>
          <View style={tw`flex-row items-center justify-center gap-2`}>
            <View style={tw`w-3 h-3 rounded-full bg-[#4CAF50]`}></View>
            <Text style={tw`text-black font-satoshiBlack text-xs`}>Estrogen</Text>
          </View>
          <View style={tw`flex-row items-center justify-center gap-2`}>
            <View style={tw`w-3 h-3 rounded-full bg-[#9733EE]`}></View>
            <Text style={tw`text-black font-satoshiBlack text-xs`}>Progestterone</Text>
          </View>
          <View style={tw`flex-row items-center justify-center gap-2`}>
            <View style={tw`w-3 h-3 rounded-full bg-[#FF4C4C]`}></View>
            <Text style={tw`text-black font-satoshiBlack text-xs`}>Testosterone</Text>
          </View>
          <View style={tw`flex-row items-center justify-center gap-2`}>
            <View style={tw`w-3 h-3 rounded-full bg-[#FFA500]`}></View>
            <Text style={tw`text-black text-xs`}>LH</Text>
          </View>
        </View>

      </LinearGradient>
      <View style={tw` bg-white  `}>
        <CheckInList />
      </View>
      <LinearGradient
        colors={["#0B3434", "#20727280", "#20727280", "#A8D4D4CC", "#FFFFFFFF"]} // Gradient colors
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={tw`items-center w-full`}
      >
        <SeasonInsights />
        <MoonPahseTody />
      </LinearGradient>
      <StatusBar backgroundColor="#0B3434" translucent={false} />
    </ScrollView>





  );
};

export default OvulationCircle;
