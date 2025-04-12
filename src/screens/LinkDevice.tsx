import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconCopy, IconCross } from '../assets/Icons'
import { TextArea } from 'react-native-ui-lib'
import TButton from '../component/TButton'
import { Link } from '@react-navigation/native'
import { SceneMap, TabView } from 'react-native-tab-view'
import Clipboard from '@react-native-clipboard/clipboard'
import Svg, { Circle, Line } from 'react-native-svg';

type Props = {}
const code = "FMF296";
const copyToClipboard = () => {
    Clipboard.setString(code);
};

const FirstRoute = () => (
    <ScrollView style={tw`flex-1 bg-transparent mt-6`}>

        <Text style={tw`text-black text-center font-SatoshiBold text-xl`}>Coonect with your partner for a {"\n"}seamless experience</Text>
        <View style={tw`items-center justify-center`}>
            <Image style={tw`mt-6 items-center object-cover`} source={require("../assets/Imgages/AddNotes/LinkDevice.png")} />
        </View>
        <View style={tw`bg-white rounded-xl p-4 flex-row items-center justify-between shadow-md mt-4`}>
            <View>
                <Text style={tw`text-lg font-bold text-black`}>{code}</Text>
                <Text style={tw`text-xs text-gray-500`}>for spouse</Text>
            </View>
            <TouchableOpacity onPress={copyToClipboard}>
                <SvgXml xml={IconCopy} />
            </TouchableOpacity>
        </View>
        <View style={tw`bg-white rounded-xl p-4 flex-row items-center justify-between shadow-md mt-4`}>
            <View>
                <Text style={tw`text-lg font-bold text-black`}>{code}</Text>
                <Text style={tw`text-xs text-gray-500`}>for family & friends</Text>
            </View>
            <TouchableOpacity onPress={copyToClipboard}>
                <SvgXml xml={IconCopy} />
            </TouchableOpacity>
        </View>
        <Text style={tw`text-black text-center py-4`}>This code is valid for next 48 hours</Text>
    </ScrollView>
);

const SecondRoute = () => (
    <View style={tw`flex-1 bg-transparent justify-center items-center`}>
        {/* Background circles for layout */}
        {/* <View style={tw`absolute w-80 h-80 rounded-full bg-teal-100 opacity-30`} /> */}
        <View style={tw`absolute items-center justify-center`}>
            <Image style={tw`object-cover w-80 h-80`} source={require('../assets/Imgages/AddNotes/MyvillageBackground.png')} />
        </View>

        {/* SVG for dashed lines */}
        <Svg height="300" width="300" style={tw`absolute`}>
            {/* Dashed lines connecting the profiles */}
            <Line
                y1="25" x1="150" y2='150' x2="150"
                stroke="#4FD1C5" strokeWidth="1" strokeDasharray="5,5"
            />
            <Line
                x1="160" y1="160" x2="50" y2="100"
                stroke="#4FD1C5" strokeWidth="1" strokeDasharray="5,5"
            />
            <Line
                x1="150" y1="100" x2="50" y2="70"
                stroke="#4FD1C5" strokeWidth="5" strokeDasharray="5,5"
            />
            <Line
                x1="60" y1="220" x2="240" y2="20"
                stroke="#4FD1C5" strokeWidth="2" strokeDasharray="5,5"
            />
            <Line
                x1="60" y1="220" x2="240" y2="120"
                stroke="#4FD1C5" strokeWidth="2" strokeDasharray="5,5"
            />
            {/* Central circle for logo */}
            <Circle cx="150" cy="150" r="30" fill="white" strokeWidth="6" stroke="#4FD1C5" />
        </Svg>

        {/* Profile images and labels */}
        {/* "Me" at the top */}
        <View style={tw`absolute top-45 `}>
            <Image
                source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
                style={tw`w-14 h-14 rounded-full border-2 border-teal-500`}
            />
            <View style={tw`w-8 h-6 mx-auto`}>
                <Text style={tw`text-center text-teal-800 text-xs bg-gray-300 mt-1`}>Me</Text>
            </View>


        </View>


        {/* "Fatima" bottom left */}
        <View style={tw`absolute bottom-75 left-11`}>
            <Image
                source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }}
                style={tw`w-14 h-14 rounded-full border-2 border-teal-500`}
            />
            <View style={tw`w-12 h-6 mx-auto`}>
                <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Fatima</Text>
            </View>
        </View>

        {/* "Ahmad" bottom right */}
        <View style={tw`absolute bottom-48 right-17`}>
            <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                style={tw`w-14 h-14 rounded-full border-2 border-teal-500`}
            />
            <View style={tw`w-12 h-6 mx-auto`}>
                <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Ahmad</Text>
            </View>
        </View>
        {/* "Fatima" bottom left */}
        <View style={tw`absolute bottom-48 left-17`}>
            <Image
                source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }}
                style={tw`w-14 h-14 rounded-full border-2 border-teal-500`}
            />
            <View style={tw`w-12 h-6 mx-auto`}>
                <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Fahim</Text>
            </View>
        </View>

        {/* "Ahmad" bottom right */}
        <View style={tw`absolute bottom-[50%] right-12`}>
            <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                style={tw`w-14 h-14 rounded-full border-2 border-teal-500`}
            />
            <View style={tw`w-12 h-6 mx-auto`}>
                <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Imran</Text>
            </View>
        </View>

        {/* Central logo and numbers */}
        {/* <View style={tw`absolute`}>
            <Image
                source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your logo
                style={tw`w-12 h-12`}
            />
        </View> */}
        <View style={tw`absolute flex-row mt-16`}>
            <Image style={tw`w-8 h-8`} source={require("../assets/Imgages/SplashIcon.png")} />
        </View>
    </View>
);

const LinkDevice = ({ navigation }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const routes = [
        { key: 'first', title: 'Partner' },
        { key: 'second', title: 'My village' },
    ];

    return (
        <View style={tw`flex-1 bg-[#E8F6F6] p-[4%]`}>
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconCross} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Link device</Text>
                <View></View>
            </View>
            <View style={tw`mt-8 flex-1 bg-transparent`}>
                <TabView
                    style={{ backgroundColor: 'transparent' }}
                    renderTabBar={(props) => (
                        <View style={tw`flex-row justify-between bg-[#7676801F] rounded-lg`}>
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
                                                `font-SatoshiBold`,
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




        </View>
    )
}

export default LinkDevice

const styles = StyleSheet.create({})