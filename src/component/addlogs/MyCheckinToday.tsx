import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';

type Props = {}

const MyCheckinToday = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "Happy",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Happy.png")}
            />
        },
        {
            id: 2,
            title: "calm",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/calm.png")}
            />
        },
        {
            id: 3,
            title: "Energetic",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Energic.png")}
            />
        },
        {
            id: 4,
            title: "Confident",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Confident.png")}
            />
        },
        {
            id: 5,
            title: "Sad",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Sad.png")}
            />
        },
        {
            id: 6,
            title: "Focused",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Focused.png")}
            />
        },
        {
            id: 7,
            title: "Exhausted",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Exhausted.png")}
            />
        },
        {
            id: 8,
            title: "Low",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Low.png")}
            />
        },
        {
            id: 9,
            title: "Irritated",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Irritated.png")}
            />
        },
        {
            id: 10,
            title: "Anxious",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Anxious.png")}
            />
        },
        {
            id: 11,
            title: "Stressed",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Stressed.png")}
            />
        },
        {
            id: 12,
            title: "High libido",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/HighLibido.png")}
            />
        },
        {
            id: 13,
            title: "Low libido",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/LowLibido.png")}
            />
        },
        {
            id: 14,
            title: "Low energy",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/lowEnergy.png")}
            />
        },
        {
            id: 15,
            title: "Self-critical",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Self-critical.png")}
            />
        },
        {
            id: 16,
            title: "Sensitive",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Sensitive.png")}
            />
        },
        {
            id: 17,
            title: "Emotional",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Emotional.png")}
            />
        },
        {
            id: 18,
            title: "Overthinking",
            icon: <Image source={require("../../assets/Imgages/AddLogs/myCheckinTody/Overthinking.png")}
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
            <Text style={tw`text-black text-lg font-SatoshiBold`}>My Check-In today</Text>
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
                            <Text style={{ color: isSelected ? '#2B9696' : 'black', fontSize: 14, marginRight: 6 }}>
                                {option.title}
                            </Text>
                            {isSelected &&   <SvgXml style={tw`absolute right-1`} xml={IconTick}/> }
                          
                        </TouchableOpacity>
                    );
                }
                )}
            </View>
        </View>
    )
}

export default MyCheckinToday

const styles = StyleSheet.create({})