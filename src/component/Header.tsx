import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, { useEffect } from 'react';
import {SvgXml} from 'react-native-svg';
import tw from '../lib/tailwind';
import InputText from './InputText';
import {NavigProps} from '../interface/NaviProps';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import { useGetNotificationsQuery, useGetProfileQuery } from '../redux/api/apiSlice/apiSlice';
import { IconBell, IconDrawer } from '../assets/Icons';


interface HeadrePops extends NavigProps<null> {}

const Header = () => {
  // const {data, isLoading, isError} = useGetProfileQuery({})
  // const {data:notifiaction, refetch} = useGetNotificationsQuery([]);
  // const unreadNotifications = notifiaction?.data?.filter(item => item?.read_at === null);

// Count unread notifications
// const unreadCount = unreadNotifications?.length || "";

  // console.log("data", unreadCount)
  // useEffect(() => {
  //   // Fetch notifications every 5 seconds
  //   const interval = setInterval(() => {
  //     refetch();
  //   }, 5000);

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);
  const navigation = useNavigation();
  return (
    <View style={tw`pb-4`}>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center gap-4`}>
          <TouchableOpacity
            // onPress={() => navigation?.dispatch(DrawerActions?.openDrawer())}
            onPress={() => navigation?.openDrawer()} 
            >
            <SvgXml width={25} height={25} xml={IconDrawer} />
          </TouchableOpacity>

          <View>
            <Text style={tw`text-xl text-white font-SatoshiBold items-center justify-center font-RoboMedium`}>
          The Sanctum
            </Text>
           
          </View>
        </View>
        <View style={tw`flex-row items-center gap-2`}>
          <TouchableOpacity
            style={tw` w-10 h-10 flex-row items-center justify-center rounded-full relative`}
            onPress={() => navigation?.navigate('Notifications')}>
            <SvgXml xml={IconBell} />
            {/* <Text style={tw`absolute -top-1 left-5 font-bold z-1 text-red-600`}> {unreadCount}</Text> */}
          </TouchableOpacity>
          {/* <View
            style={tw`bg-offWhite w-9 h-9 flex-row items-center justify-center rounded-full `}>
            <Image
              style={tw`w-full h-full rounded-full`}
              source={require('../assets/images/avatar.jpg')}
            />
          </View> */}
        </View>
      </View>
      <StatusBar backgroundColor={"#0B3434"} translucent={false}/>
    </View>
  );
};

export default Header;
