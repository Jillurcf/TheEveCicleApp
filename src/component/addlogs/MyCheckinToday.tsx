import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';
import HappyIcon from '../../assets/Imgages/AddLogs/myCheckinTody/newsvg/happy.png';
import CalmIcon from '../../assets/Imgages/AddLogs/myCheckinTody/calm.svg';
import EnergicIcon from '../../assets/Imgages/AddLogs/myCheckinTody/newsvg/energetic.svg';
import ConfidentIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Confident.svg';
import SadIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Sad.svg';
import FocuccedIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Focused.svg';
import Exhausted from '../../assets/Imgages/AddLogs/myCheckinTody/Exhausted.svg';
import LowIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Low.svg';
import IrritatedIcon from '../../assets/Imgages/AddLogs/myCheckinTody/newsvg/irritated.svg';
import AnxiousIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Anxious.svg';
import StressedIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Stressed.svg';
import HighLibidoIcon from '../../assets/Imgages/AddLogs/myCheckinTody/HighLibido.svg';
import LowLibidoIcon from '../../assets/Imgages/AddLogs/myCheckinTody/LowLibido.svg';
import LowEnergyIcon from '../../assets/Imgages/AddLogs/myCheckinTody/LowEnergy.svg';
import SelfCriticalIcon from '../../assets/Imgages/AddLogs/myCheckinTody/SelfCritical.svg';
import SensitiveIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Sensitive.svg';
import EmotionalIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Emotional.svg';
import OverthinkingIcon from '../../assets/Imgages/AddLogs/myCheckinTody/OverThinking.svg';


type Props = {}

const MyCheckinToday = (props: Props) => {
    const options = [

        {
            id: 1,
            title: "Happy",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/happy.png')} />

        },
        {
            id: 2,
            title: "calm",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/calm.png')} />

        },
        {
            id: 3,
            title: "Reflective",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/reflective.png')} />
        },
        {
            id: 3,
            title: "Energetic",
            icon: <EnergicIcon width={30} height={30}/>
                
        },
        {
            id: 4,
            title: "Confident",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/confident.png')} />
        },
        {
            id: 5,
            title: "Sad",
             icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/sad.png')} />
        },
        {
            id: 6,
            title: "Focused",
              icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/foccused.png')} />
        },
        {
            id: 7,
            title: "Exhausted",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/exhausted.png')} />
        },
        {
            id: 8,
            title: "Low",
              icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/low.png')} />
        },
        {
            id: 9,
            title: "Irritated",
            icon: <IrritatedIcon width={30} height={30} />
        },
        {
            id: 10,
            title: "Anxious",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/anxious.png')} />
        },
        {
            id: 11,
            title: "Stressed",
           icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/stressed.png')} />
        },
        {
            id: 12,
            title: "High libido",
             icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/highLibido.png')} />
        },
        {
            id: 13,
            title: "Low libido",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/lowLibido.png')} />
        },
        {
            id: 14,
            title: "Low energy",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/lowEnergy.png')} />
        },
        {
            id: 15,
            title: "Self-critical",
              icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/selfCritical.png')} />
        },
        {
            id: 16,
            title: "Sensitive",
           icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/sensitive.png')} />
        },
        {
            id: 17,
            title: "Emotional",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/Emotional.png')} />
        },
        {
            id: 18,
            title: "Overthinking",
            icon: <Image style={tw`w-4 h-4`} source={require('../../assets/Imgages/AddLogs/myCheckinTody/newsvg/overThinking.png')} />
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
            <Text style={tw`text-[#121221] my-2 font-SatoshiBold`}>My Check-In today</Text>
            <View style={tw`my-2 flex-row flex-wrap gap-1`}>
                {options.map((option) => {
                    const isSelected = selectedOptions.includes(option.title);

                    return (
                        <TouchableOpacity
                            key={option.id}
                            onPress={() => toggleOption(option.title)}
                            style={[
                                tw`mb-2 relative rounded-full flex-row items-center gap-1 p-1 px-2`,
                                {
                                    backgroundColor: isSelected ? '#EAF5F5' : '#FFFFFF',
                                    borderColor: isSelected ? '#EAF5F5' : '#E7E7E9',
                                    borderWidth: 1,
                                }
                            ]}
                        >
                            <View style={tw``}>
                                {option.icon}
                            </View>

                            <Text style={{ color: isSelected ? '#2B9696' : '#76767E', fontSize: 12, marginRight: 6 }}>
                                {option.title}
                            </Text>
                            {isSelected && <SvgXml style={tw`absolute right-0`} xml={IconTick} />}

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