import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
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
import LinkDevices from "../assets/Imgages/LinkDevice/image.svg"

type Props = {}
const code = "FMF296";
const copyToClipboard = () => {
    Clipboard.setString(code);
};

const FirstRoute = () => (
    <ScrollView style={tw`flex-1 bg-transparent mt-6`}>

        <Text style={tw`text-black text-center font-SatoshiBold text-xl`}>Connect with your partner & trusted {"\n"}friends for a shared experience</Text>
        <View style={tw`items-center justify-center`}>
            {/* <Image style={tw`mt-6 items-center object-cover`} source={require("../assets/Imgages/LinkDevice/image.svg")} /> */}
           <LinkDevices width={358} height={264} />
        </View>
        <View style={tw`bg-white rounded-xl p-4 flex-row items-center justify-between shadow-md mt-4`}>
            <View></View>
            <View style={tw`items-center`}>
                <Text style={tw`text-2xl font-bold text-black`}>{code}</Text>
                <Text style={tw`text-xs text-gray-500`}>for spouse</Text>
            </View>
            <TouchableOpacity onPress={copyToClipboard}>
                <SvgXml xml={IconCopy} />
            </TouchableOpacity>
        </View>
        <View style={tw`bg-white rounded-xl p-4 flex-row items-center justify-between shadow-md mt-4`}>
             <View></View>
            <View style={tw`items-center`}>
                <Text style={tw`text-2xl font-bold text-black`}>{code}</Text>
                <Text style={tw`text-xs text-gray-500`}>for family & friends</Text>
            </View>
            <TouchableOpacity onPress={copyToClipboard}>
                <SvgXml xml={IconCopy} />
            </TouchableOpacity>
        </View>
        {/* <View style={tw`bg-white rounded-xl p-4 flex-row items-center justify-between shadow-md mt-4`}>
            <View>
                <Text style={tw`text-lg font-bold text-black`}>{code}</Text>
                <Text style={tw`text-xs text-gray-500`}>for family & friends</Text>
            </View>
            <TouchableOpacity onPress={copyToClipboard}>
                <SvgXml xml={IconCopy} />
            </TouchableOpacity>
        </View> */}
        <Text style={tw`text-[#76767E] text-center py-4`}>This code is valid for next 48 hours</Text>
    </ScrollView>
);

// const SecondRoute = () => (
//     <ScrollView contentContainerStyle={tw`flex-1 bg-transparent items-center mt-8`}>
//         {/* Background circles for layout */}
//         {/* <View style={tw`absolute w-80 h-80 rounded-full bg-teal-100 opacity-30`} /> */}
//         <View style={tw`absolute items-center justify-center`}>
//             <Image style={tw`object-cover w-80 h-80`} source={require('../assets/Imgages/AddNotes/MyVillageImg1.png')} />
//         </View>

//         {/* SVG for dashed lines */}
//         <Svg height="300" width="300" style={tw`absolute`}>
//             {/* Dashed lines connecting the profiles */}
//             {/* <Line
//                 y1="25" x1="150" y2='150' x2="150"
//                 stroke="#4FD1C5" strokeWidth="1" strokeDasharray="5,5"
//             />
//             <Line
//                 x1="160" y1="160" x2="50" y2="100"
//                 stroke="#4FD1C5" strokeWidth="1" strokeDasharray="5,5"
//             />
//             <Line
//                 x1="150" y1="100" x2="50" y2="70"
//                 stroke="#4FD1C5" strokeWidth="5" strokeDasharray="5,5"
//             />
//             <Line
//                 x1="60" y1="220" x2="240" y2="20"
//                 stroke="#4FD1C5" strokeWidth="2" strokeDasharray="5,5"
//             />
//             <Line
//                 x1="60" y1="220" x2="240" y2="120"
//                 stroke="#4FD1C5" strokeWidth="2" strokeDasharray="5,5"
//             /> */}
//             {/* Central circle for logo */}
//             <Circle cx="150" cy="160" r="30" fill="white" strokeWidth="6" stroke="#4FD1C5" />
//         </Svg>

//         {/* Profile images and labels */}
//         {/* "Me" at the top */}
//         <View style={tw`absolute top-25 right-11 transform -translate-x-1/2`}>
//             <Image
//                 source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
//                 style={tw`w-14 h-14 rounded-full border-2 border-teal-500 z-20`}
//             />
//             <View style={tw`w-8 h-6 mx-auto`}>
//                 <Text style={tw`text-center text-teal-800 text-xs bg-gray-300 mt-1`}>Me</Text>
//             </View>


//         </View>


//         {/* "Fatima" bottom left */}
//         <View style={tw`absolute top-25 left-11`}>
//             <Image
//                 source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }}
//                 style={tw`w-14 h-14 rounded-full border-2 border-teal-500 z-20`}
//             />
//             <View style={tw`w-12 h-6 mx-auto`}>
//                 <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Fatima</Text>
//             </View>
//         </View>

//         {/* "Ahmad" bottom right */}
//         <View style={tw`absolute top-50 right-17`}>
//             <Image
//                 source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
//                 style={tw`w-14 h-14 rounded-full border-2 border-teal-500 z-20`}
//             />
//             <View style={tw`w-12 h-6 mx-auto`}>
//                 <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Ahmad</Text>
//             </View>
//         </View>
//         {/* "Fatima" bottom left */}
//         <View style={tw`absolute top-50 left-17 z-30`}>
//             <Image
//                 source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }}
//                 style={tw`w-14 h-14 rounded-full border-2 border-teal-500 z-20`}
//             />
//             <View style={tw`w-12 h-6 mx-auto z-20`}>
//                 <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Fahim</Text>
//             </View>
//         </View>

//         {/* "Ahmad" bottom right */}
//         <View style={tw`absolute bottom-[%] top-8`}>
//             <Image
//                 source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
//                 style={tw`w-14 h-14 rounded-full border-2 border-teal-500`}
//             />
//             <View style={tw`w-12 h-6 mx-auto`}>
//                 <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Imran</Text>
//             </View>
//         </View>

//         {/* Central logo and numbers */}
//         {/* <View style={tw`absolute`}>
//             <Image
//                 source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your logo
//                 style={tw`w-12 h-12`}
//             />
//         </View> */}
//         <View style={tw`absolute top-18 flex-row mt-16`}>
//             <Image style={tw`w-8 h-8`} source={require("../assets/Imgages/SplashIcon.png")} />
//         </View>
//         <View style={tw`bg-white w-full h-96 absolute top-85 rounded-3xl shadow-md p-4`}>

//         </View>

//     </ScrollView>
// );


const SecondRoute = () => (
    <ScrollView contentContainerStyle={tw`flex-grow bg-transparent h-350 items-center pt-8`}>
        {/* Tall wrapping container to enable scrolling */}
        <View style={tw`h-[1000px] w-full relative items-center`}>

            {/* Background Image */}
            <View style={tw`absolute items-center justify-center top-0`}>
                <Image
                    style={tw`w-80 h-80`}
                    resizeMode="cover"
                    source={require('../assets/Imgages/AddNotes/MyVillageImg1.png')}
                />
            </View>

            {/* SVG */}
            <Svg height="300" width="300" style={tw`absolute top-0`}>
                <Circle cx="150" cy="160" r="30" fill="white" strokeWidth="6" stroke="#4FD1C5" />
            </Svg>

            {/* Positioned avatars */}
            <View style={tw`absolute top-25 right-11`}>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }} style={tw`w-14 h-14 rounded-full border-2 border-teal-500`} />
                <Text style={tw`text-center text-teal-800 text-xs bg-gray-300 mt-1`}>Me</Text>
            </View>

            <View style={tw`absolute top-25 left-11`}>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} style={tw`w-14 h-14 rounded-full border-2 border-teal-500`} />
                <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Fatima</Text>
            </View>

            <View style={tw`absolute top-50 right-17`}>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={tw`w-14 h-14 rounded-full border-2 border-teal-500`} />
                <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Ahmad</Text>
            </View>

            <View style={tw`absolute top-50 left-17`}>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} style={tw`w-14 h-14 rounded-full border-2 border-teal-500`} />
                <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Fahim</Text>
            </View>

            <View style={tw`absolute top-9`}>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={tw`w-14 h-14 rounded-full border-2 border-teal-500`} />
                <Text style={tw`text-center text-xs bg-gray-300 text-teal-800 mt-1`}>Imran</Text>
            </View>

            {/* Center icon */}
            <View style={tw`absolute top-37`}>
                <Image style={tw`w-8 h-8`} source={require("../assets/Imgages/SplashIcon.png")} />
            </View>

            {/* Bottom panel */}
            <View style={tw`absolute top-[35%] bg-white w-full rounded-3xl shadow-md p-4`}>
                <Text style={tw`text-xl font-SatoshiBold`}>Season</Text>
                <View style={tw`flex-row items-center gap-4 mt-4`}>
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={tw`w-14 h-14 rounded-full border-2 border-teal-500`} />
                    <View>
                        <Text style={tw`text-black text-lg font-SatoshiBold`}>Fatima Akter</Text>
                        <Text style={tw`text-black`}>Winter</Text>
                    </View>
                </View>
                <View style={tw`flex-row items-center gap-4 mt-4`}>
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={tw`w-14 h-14 rounded-full border-2 border-teal-500`} />
                    <View>
                        <Text style={tw`text-black text-lg font-SatoshiBold`}>Fatima Akter</Text>
                        <Text style={tw`text-black`}>Summer</Text>
                    </View>
                </View>
                <View style={tw`flex-row items-center gap-4 mt-4`}>
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={tw`w-14 h-14 rounded-full border-2 border-teal-500`} />
                    <View>
                        <Text style={tw`text-black text-lg font-SatoshiBold`}>Fatima Akter</Text>
                        <Text style={tw`text-black`}>Spring</Text>
                    </View>
                </View>
                <View style={tw`flex-row items-center gap-4 mt-4`}>
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={tw`w-14 h-14 rounded-full border-2 border-teal-500`} />
                    <View>
                        <Text style={tw`text-black text-lg font-SatoshiBold`}>Fatima Akter</Text>
                        <Text style={tw`text-black`}>Autumn</Text>
                    </View>
                </View>
            </View>
            <View style={tw`absolute top-[71%] bg-white w-full rounded-3xl shadow-md p-4 mb-4`}>
                <Text style={tw`text-xl font-SatoshiBold`}>Support</Text>
             

                    <View style={tw`mt-4`}>
                        <Text style={tw`text-[#121221] text-lg font-SatoshiBold`}>Winter</Text>
                        <Text style={tw`text-[#3A3A47`}>Needs warm clothes, heating, extra rest.</Text>
                    </View>
               
                <View style={tw`mt-4`}>
                    <Text style={tw`text-[#121221] text-lg font-SatoshiBold`}>Summer</Text>
                    <Text style={tw`text-[#3A3A47]`}>Needs warm clothes, heating, extra rest.</Text>
                </View>
                <View style={tw`mt-4`}>
                    <Text style={tw`text-[#121221] text-lg font-SatoshiBold`}>Spring</Text>
                    <Text style={tw`text-[#3A3A47]`}>Needs warm clothes, heating, extra rest.</Text>
                </View>
                <View style={tw`mt-4`}>
                    <Text style={tw`text-[#121221] text-lg font-SatoshiBold`}>Autumn</Text>
                    <Text style={tw`text-[#3A3A47]`}>Needs warm clothes, heating, extra rest.</Text>
                </View>
            </View>
            <View style={tw`absoulute top-260 bg-white w-full rounded-3xl shadow-md p-4 mb-4`}>
                <Text style={tw`text-xl font-SatoshiBold`}>Health insights</Text>
             

                    <View style={tw`mt-4`}>
                        <Text style={tw`text-[#121221text-lg font-SatoshiBold`}>Winter</Text>
                        <Text style={tw`text-[#3A3A47]`}>Needs warm clothes, heating, extra rest.</Text>
                    </View>
               
                <View style={tw`mt-4`}>
                    <Text style={tw`text-[#121221] text-lg font-SatoshiBold`}>Summer</Text>
                    <Text style={tw`text-[#3A3A47]`}>Needs warm clothes, heating, extra rest.</Text>
                </View>
                <View style={tw`mt-4`}>
                    <Text style={tw`text-[#121221] text-lg font-SatoshiBold`}>Spring</Text>
                    <Text style={tw`text-[#3A3A47]`}>Needs warm clothes, heating, extra rest.</Text>
                </View>
                <View style={tw`mt-4`}>
                    <Text style={tw`text-[#121221] text-lg font-SatoshiBold`}>Autumn</Text>
                    <Text style={tw`text-[#3A3A47]`}>Needs warm clothes, heating, extra rest.</Text>
                </View>
            </View>

        </View>
    </ScrollView>
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
            <View style={tw`flex-row justify-between mt-6`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconCross} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-[#121221] text-xl`}>Link device</Text>
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
                <StatusBar translucent={false}/>
            </View>




        </View>
    )
}

export default LinkDevice

const styles = StyleSheet.create({})