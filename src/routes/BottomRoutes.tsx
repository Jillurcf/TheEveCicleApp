import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import tw from "../lib/tailwind";


import Calendar from "../screens/Calendar";
import {
  IconCalendar,
  IconCalendarFocus,
  IconPlus,
  IconToday,
  IconTodayFocus,
} from "../assets/Icons";
import Today from "../screens/Today";

const Tab = createBottomTabNavigator();

function BottomRoutes() {
  const CustomAddButton = ({ onPress }) => (
    <TouchableOpacity
      style={tw`absolute bottom-[25px] left-[40%] -translate-x-1/2 w-16 h-16 bg-[#E5F4F2] rounded-full justify-center items-center shadow-lg`}
      onPress={onPress}
    >
      <SvgXml xml={IconPlus} width={24} height={24} />
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: tw`h-[70px] bg-white shadow-md`, // Increased height for button spacing
        tabBarItemStyle: tw`my-1`, // Adjusted margin
        tabBarLabelStyle: tw`hidden`, // Hide labels
        tabBarIcon: ({ focused }) => {
          let icon;

          switch (route.name) {
            case "Today":
              icon = focused ? IconTodayFocus : IconToday;
              break;

            case "Calendar":
              icon = focused ? IconCalendarFocus : IconCalendar;
              break;

            default:
              icon = null;
          }

          return icon ? <SvgXml xml={icon} width={24} height={24} /> : null;
        },
      })}
    >
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen
        name="Add"
        component={Today} // Can replace with modal or specific action
        options={{
          tabBarButton: (props) => <CustomAddButton {...props} />,
        }}
      />
      <Tab.Screen name="Calendar" component={Calendar} />
    </Tab.Navigator>
  );
}

export default BottomRoutes;
