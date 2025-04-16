import { StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../assets/Icons'
import tw from '../../lib/tailwind'
import { SceneMap, TabView } from 'react-native-tab-view'
import VideoPlayer from 'react-native-video-player'
import LinearGradient from 'react-native-linear-gradient'

type Props = {}
const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#E8F6F6', padding: '4%' }}>
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#CAF0F800', '#00B4D8', '#CAF0F800']} // Gradient colors (adjust as needed)
                style={tw`w-full h-52 rounded-lg overflow-hidden mt-4`}
            >
                <VideoPlayer
                // controls
                // controlsStyles={tw`bg-gray-500 rounded-lg`}
                    // videoStyle={styles.video}
                    // videoProps={{
                    //     resizeMode: 'contain', // Adjust the video size
                    //     repeat: true, // Loop the video
                    // }}
                    source={require('../../assets/video/SampleVideo_1280x720_1mb.mp4')}
                    // source={{ uri: 'https://wcmauthorguide.illinois.gov/media/videos/sample-videos/hourglass-mp4' }}
                    thumbnail={require('../../assets/Imgages/AddLogs/MyDay/Dhikr.png')}
                    autoplay
                    style={tw`w-[95%] h-full rounded-2xl mx-auto px-6`} // Apply the full width and height for the video player
                />
            </LinearGradient>
        </View>
    </View>
);
const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#E8F6F6', padding: '4%' }}>
        <Text>Second Route</Text>
    </View>
);
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#E8F6F6', padding: '4%' }}>
        <Text>Third Route</Text>
    </View>
);
const FourthRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#E8F6F6', padding: '4%' }}>
        <Text>Third Route</Text>
    </View>
);
const FithRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#E8F6F6', padding: '4%' }}>
        <Text>Third Route</Text>
    </View>
);
const DhikrAndMedition = ({ navigation }: { navigation: any }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
        fifth: FithRoute,
    });

    const routes = [
        { key: 'first', title: 'Winter care' },
        { key: 'second', title: 'Spring grouth' },
        { key: 'third', title: 'Summer joy' },
        { key: 'fourth', title: 'Autumn peach' },
        { key: 'fifth', title: 'Heart Meditation' },
    ];
    return (
        <View style={{ flex: 1, backgroundColor: '#E8F6F6', padding: '4%' }}>
            <View style={tw`flex-row items-center justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation?.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`text-lg text-black font-SatoshiBold`}>Dhikr & Meditation</Text>
                <View></View>
            </View>

            <View style={tw`mt-8 flex-1 bg-transparent`}>
                <TabView
                    style={{ backgroundColor: 'transparent' }}
                    renderTabBar={(props) => (
                        <View style={tw`flex-row gap-0.6 p-0.5 items-center justify-center bg-[#7676801F] rounded-lg`}>
                            {props.navigationState.routes.map((route, i) => {
                                const isActive = props.navigationState.index === i;
                                return (
                                    <TouchableOpacity
                                        key={i}
                                        onPress={() => props.jumpTo(route.key)}
                                        style={tw.style(
                                            `flex-1 items-center py-2 `,
                                            isActive ? `bg-white rounded-md` : `bg-[#7676801F]`
                                        )}
                                    >
                                        <Text
                                            style={tw.style(
                                                `font-SatoshiBold text-center`,
                                                isActive ? `text-black` : `text-gray-500`
                                            )}
                                        >
                                            {route.title}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    )}
                    lazy
                    lazyPreloadDistance={2}
                    initialLayout={{ width: layout.width }}
                    tabBarPosition="top"
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                />
            </View>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#E8F6F6"
                translucent
                ={false}
            />
        </View>
    )
}

export default DhikrAndMedition

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200, // Set the height of the video container
        backgroundColor: '#00B4D8', // Black background for the video container
        borderRadius: 10, // Round corners
        overflow: 'hidden', // Ensure the video fits inside the container
        marginBottom: 20, // Adjust margin if needed
        paddingHorizontal: 20
    },
    video: {
        width: '100%',
        height: '100%', // Make the video fill the container
        borderRadius: 50, // Apply border radius to the video player
    },
});