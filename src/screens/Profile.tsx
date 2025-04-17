import {
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import tw from '../lib/tailwind';
import { launchImageLibrary } from 'react-native-image-picker';
import { SvgXml } from 'react-native-svg';
import { IconCamera } from '../assets/Icons';
import { SceneMap, TabView } from 'react-native-tab-view';
import Period from '../component/profile/Period';
import CycleLength from '../component/profile/CycleLength';
import Symptoms from '../component/profile/Symptoms';

const FirstRoute = () => (
  <ScrollView style={tw`bg-white p-4`}>
 <Period/>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={tw`bg-white p-4`}>
   <CycleLength/>
  </ScrollView>
);

const ThirdRoute = () => (
  <ScrollView style={tw`bg-white p-4`}>
   <Symptoms />
  </ScrollView>
);

const Profile = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState<string>('');
  const selectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.assets?.length && result.assets[0].uri) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'first', title: 'Period' },
    { key: 'second', title: 'Cycle length' },
    { key: 'third', title: 'Symptopms' },
  ];

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <ScrollView style={tw`flex-1 bg-[#E8F6F6] p-4`}>
      <Text style={tw`text-2xl text-black font-SatoshiBold`}>My profile</Text>

      <TouchableOpacity onPress={selectImage} style={tw`items-center mt-4`}>
        <View>
          <Image
            source={
              profileImage
                ? { uri: profileImage }
                : require('../assets/Imgages/Profile/pfp.png')
            }
            style={tw`w-24 h-24 rounded-full`}
          />
          <TouchableOpacity style={tw`absolute bottom-0 right-0`}>
            <SvgXml xml={IconCamera} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View style={tw`mt-1 items-center`}>
        <Text style={tw`text-primaryBase text-lg`}>Aisha Rahman</Text>
        <Text style={tw`text-primaryBase text-xs`}>aisha@gmail.com</Text>
      </View>

      <Text style={tw`text-black font-SatoshiBold text-center text-xl mt-8`}>
        Based on your input data
      </Text>

      <View style={tw`flex-row mt-4 justify-between gap-2`}>
        <View style={tw`bg-white p-3 rounded-lg w-[48%] flex-row justify-between`}>
          <View>
            <Text style={tw`text-lg font-SatoshiBold text-black`}>4 days</Text>
            <Text style={tw`text-xs font-SatoshiRegular`}>Average period</Text>
          </View>
          <Image source={require('../assets/Imgages/Profile/profileBlad.png')} />
        </View>
        <View style={tw`bg-white p-3 rounded-lg w-[48%] flex-row justify-between`}>
          <View>
            <Text style={tw`text-lg font-SatoshiBold text-black`}>4 days</Text>
            <Text style={tw`text-xs font-SatoshiRegular`}>Average period</Text>
          </View>
          <Image source={require('../assets/Imgages/Profile/ProfileCalendar.png')} />
        </View>
      </View>

      <Text style={tw`text-xl font-SatoshiBold text-black mt-6`}>History</Text>

      {/* Give TabView a fixed height */}
      <View style={tw`mt-4 bg-white flex-1 h-[320px] p-2 rounded-2xl my-8`}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <View style={tw`flex-row gap-2 p-1 items-center justify-center rounded-lg`}>
              {props.navigationState.routes.map((route, i) => {
                const isActive = props.navigationState.index === i;
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => props.jumpTo(route.key)}
                    style={tw.style(
                      `flex-1 border border-gray-300 items-center py-2 px-2 rounded-3xl`,
                      isActive ? `bg-[#4FA8A8]` : `bg-transparent`
                    )}
                  >
                    <Text
                      style={tw.style(
                        `text-xs font-SatoshiBold`,
                        isActive ? `text-white` : `text-gray-500`
                      )}
                    >
                      {route.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        />
      </View>

      <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" />
    </ScrollView>
  );
};

export default Profile;
