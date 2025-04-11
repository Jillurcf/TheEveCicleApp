import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';

type Props = {}

const MyVirginalDischarge = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "No discharge",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/NoDischarge.png")}
            />
        },
        {
            id: 2,
            title: "Watery",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/Watery.png")}
            />
        },
        {
            id: 3,
            title: "Creamy",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/Creamy.png")}
            />
        },
        {
            id: 4,
            title: "Sticky",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/Sticy.png")}
            />
        },
        {
            id: 5,
            title: "Egg white",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/EggtWhite.png")}
            />
        },
        {
            id: 6,
            title: "Clumpy white",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/ClumpyWhite.png")}
            />
        },
        {
            id: 7,
            title: "Yellowish",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/Yellowish.png")}
            />
        },
        {
            id: 8,
            title: "Spotting",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/Spotting.png")}
            />
        },
        {
            id: 9,
            title: "Unusual color",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/UnusualColor.png")}
            />
        },
        {
            id: 10,
            title: "Odourless",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/Odourless.png")}
            />
        },
        {
            id: 11,
            title: "Strong odour",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyVirginalDischarge/StrongOdour.png")}
            />
        },
        
    ];

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    // Toggle option selection
    const toggleOption = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };
    return (
        <View style={tw`bg-white rounded-2xl p-[4%]`}>
            <Text style={tw`text-black text-lg font-SatoshiBold`}>My virginal discharge</Text>
            <View style={tw`my-2 flex-row flex-wrap gap-1`}>
                {options.map((option) =>
                {
                    const isSelected = selectedOptions.includes(option.title);

                    return (
                        <TouchableOpacity
                            key={option.id}
                            onPress={() => toggleOption(option.title)}
                            style={[
                                tw`mb-2 relative rounded-full flex-row items-center gap-2 px-4 py-2`,
                                {
                                    backgroundColor: isSelected ? '#EAF5F5' : '#f2f2f2',
                                    borderColor: isSelected ? '#EAF5F5' : '#ccc',
                                    borderWidth: 1,
                                }
                            ]}
                        >
                           
                            {option.icon}
                            <Text style={{ color: isSelected ? '#2B9696' : 'black', fontSize: 14, marginRight: 10 }}>
                                {option.title}
                            </Text>
                            {isSelected &&   <SvgXml style={tw`absolute right-2`} xml={IconTick}/> }
                          
                        </TouchableOpacity>
                    );
                }
                )}
            </View>
        </View>
    )
}

export default MyVirginalDischarge

const styles = StyleSheet.create({})