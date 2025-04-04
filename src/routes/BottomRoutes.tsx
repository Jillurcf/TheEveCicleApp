import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import tw from "../lib/tailwind";

import Calendar from "../screens/Calendar";
import Sanctum from "../screens/Sanctum";
import Profile from "../screens/Profile";
import Today from "../screens/Today";

import {
  IconCalendar,
  IconCalendarFocus,
  IconPlus,
  IconToday,
  IconTodayFocus,
  IconSanctum,
  IconSanctumFocus,
  IconProfile,
  IconProfileFocus,
} from "../assets/Icons";

const Tab = createBottomTabNavigator();

function BottomRoutes() {
  const CustomAddButton = ({ onPress }) => (
    <View style={tw`w-20 h-20 rounded-full bg-transparent items-center justify-center`}>
      <TouchableOpacity
        style={tw`absolute bottom-[45px] left-[12%] -translate-x-1/2 w-16 h-16 bg-[#E5F4F2] rounded-full justify-center items-center shadow-lg`}
        onPress={onPress}
      >
        <SvgXml xml={IconPlus} width={24} height={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: tw`h-[70px] bg-white shadow-md`,
        tabBarItemStyle: tw`py-2`,
        tabBarLabelStyle: ({ focused }) => ({
          ...tw`text-xs font-medium`, // Base styling
          color: focused ? '#4FA8A8' : 'gray', // Green if focused, gray otherwise
        }),
        tabBarIcon: ({ focused }) => {
          let icon;

          switch (route.name) {
            case "Today":
              icon = focused ? IconTodayFocus : IconToday;
              break;

            case "Calendar":
              icon = focused ? IconCalendarFocus : IconCalendar;
              break;

            case "Sanctum":
              icon = focused ? IconSanctumFocus : IconSanctum;
              break;

            case "Profile":
              icon = focused ? IconProfileFocus : IconProfile;
              break;

            default:
              icon = null;
          }

          return icon ? <SvgXml xml={icon} width={24} height={24} /> : null;
        },
      })}
    >
      <Tab.Screen name="Today" component={Today} options={{ tabBarLabel: "Today" }} />
      <Tab.Screen name="Calendar" component={Calendar} options={{ tabBarLabel: "Calendar" }} />
      <Tab.Screen
        name="Add"
        component={Today} // Replace with your modal or screen
        options={{
          tabBarButton: (props) => <CustomAddButton {...props} />,
          tabBarLabel: "", // Hide label for Add button
        }}
      />
      <Tab.Screen name="Sanctum" component={Sanctum} options={{ tabBarLabel: "Sanctum" }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: "Profile" }} />
    </Tab.Navigator>
  );
}

export default BottomRoutes;


{/* <TouchableOpacity
      style={tw`absolute bottom-[25px] left-[45%] -translate-x-1/2 w-16 h-16 bg-[#E5F4F2] rounded-full justify-center items-center shadow-lg`}
      onPress={onPress}
    ></TouchableOpacity> */}