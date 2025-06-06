import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import VideoPlayer from 'react-native-video-player'
import tw from '../../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../../assets/Icons'

type Props = {}

const videoData = [
    { id: '1', source: require('../../../assets/video/SampleVideo_1280x720_1mb.mp4'), thumbnail: require('../../../assets/Imgages/AddLogs/MyDay/Dhikr.png'), title: 'How to getting started the Season App' },
    { id: '2', source: require('../../../assets/video/SampleVideo_1280x720_1mb.mp4'), thumbnail: require('../../../assets/Imgages/AddLogs/MyDay/Dhikr.png'), title: 'How to getting started the Season App' },
    { id: '3', source: require('../../../assets/video/SampleVideo_1280x720_1mb.mp4'), thumbnail: require('../../../assets/Imgages/AddLogs/MyDay/Dhikr.png'), title: 'How to getting started the Season App' },
    // Add more videos as needed
];

const StepByStepTutoriials = ({ navigation }: { navigation: any }) => {
    const renderItem = ({ item }: { item: any }) => (
        <View style={tw`w-32 h-52 mr-2 rounded-lg overflow-hidden`} >
            <LinearGradient
                colors={['#AAC0AA00', "#93C13D"]}
                style={tw` rounded-lg overflow-hidden`}
            >
                <VideoPlayer
                    loop
                    repeat
                    source={item.source}
                    thumbnail={item.thumbnail}
                    autoplay
                    style={tw`w-full h-30 rounded-2xl`}
                />
            </LinearGradient>
            <Text numberOfLines={2} style={tw`w-32 text-[#3A3A47] text-xs mt-2`}>{item.title}</Text>
        </View>
    );

    return (
        <ScrollView style={tw`flex-1 bg-[#E8F6F6] p-4`}>
            <View style={tw`flex-row justify-between`}>
                <View style={tw`w-[10%]`}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <SvgXml xml={IconLeftArrow} />
                    </TouchableOpacity>
                </View>
             <View style={tw`w-[80%] items-center`}>
                   <Text style={tw`font-SatoshiBold text-[#121221] text-xl`}>Step-by-step tutorials </Text>
             </View>
                <View></View>
            </View>
            <View style={tw`mt-4`}>
                <Text style={tw`font-SatoshiBold text-black text-xl py-3`}>Quick start guides</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={videoData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    contentContainerStyle={{ paddingBottom: 16 }}
                />
            </View>
            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    );
};

export default StepByStepTutoriials;

const styles = StyleSheet.create({});
