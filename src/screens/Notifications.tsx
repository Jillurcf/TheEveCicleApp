import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StatusBar } from 'react-native';
import tw from 'twrnc';
import { SvgXml } from 'react-native-svg';
import { IconBack } from '../../assets/icons/Icons';
import { IconLeftArrow } from '../assets/Icons';

// Dummy icons - replace with your own SVG or Image imports
const periodIcon = require('../assets/Imgages/Notification/PeriodIcon.png');
const logIcon = require('../assets/Imgages/Notification/LogIcon.png');

const notifications = [
  {
    id: '1',
    title: 'Upcoming Period alert',
    message: 'Only 3 days left to your upcoming period.',
    icon: periodIcon,
  },
  {
    id: '2',
    title: 'You didn’t add your log',
    message: 'Add your log to keep tracking your cycle and get relax',
    icon: logIcon,
  },
  {
    id: '3',
    title: 'Upcoming Period alert',
    message: 'Only 3 days left to your upcoming period.',
    icon: periodIcon,
  },
  {
    id: '4',
    title: 'You didn’t add your log',
    message: 'Add your log to keep tracking your cycle and get relax',
    icon: logIcon,
  },
  {
    id: '5',
    title: 'Upcoming Period alert',
    message: 'Only 3 days left to your upcoming period.',
    icon: periodIcon,
  },
];

const NotificationItem = ({ item }) => (
  <View style={tw`flex-row items-start p-4 border-b border-gray-200`}>
    <Image source={item.icon} style={tw`w-6 h-6 mt-1`} />
    <View style={tw`ml-3 flex-1`}>
      <Text style={tw`text-sm font-bold text-black`}>{item.title}</Text>
      <Text style={tw`text-sm text-gray-600`}>{item.message}</Text>
    </View>
  </View>
);

const Notifications = ({ navigation }:{navigation:any}) => {
  return (
    <View style={tw`flex-1 bg-[#F1F8F9]`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center px-4 pt-4 pb-2 bg-[#F1F8F9]`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={IconLeftArrow} />
        </TouchableOpacity>
        <Text style={tw`text-lg font-bold text-black`}>Notifications</Text>
        <TouchableOpacity>
          <Text style={tw`text-primaryBlue text-sm`}>Read all</Text>
        </TouchableOpacity>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={tw`pb-6`}
      />
         <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
    </View>
  );
};

export default Notifications;
