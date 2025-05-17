import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';
import HappyIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Happy.svg';
import CalmIcon from '../../assets/Imgages/AddLogs/myCheckinTody/calm.svg';
import EnergicIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Energic.svg';
import ConfidentIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Confident.svg';
import SadIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Sad.svg';
import FocuccedIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Focused.svg';
import Exhausted from '../../assets/Imgages/AddLogs/myCheckinTody/Exhausted.svg';
import LowIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Low.svg';
import IrritatedIcon from '../../assets/Imgages/AddLogs/myCheckinTody/Irritated.svg';
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
            icon: <HappyIcon width={20} height={20}/>
            
        },
        {
            id: 2,
            title: "calm",
            icon: <CalmIcon width={20} height={20}/>
           
        },
        {
            id: 3,
            title: "Energetic",
            icon: <EnergicIcon width={20} height={20}/>
        },
        {
            id: 4,
            title: "Confident",
            icon: 
            <ConfidentIcon width={20} height={20}/>
        },
        {
            id: 5,
            title: "Sad",
            icon: <SadIcon width={20} height={20}/>
        },
        {
            id: 6,
            title: "Focused",
            icon: <FocuccedIcon width={20} height={20}/>
        },
        {
            id: 7,
            title: "Exhausted",
            icon: <Exhausted width={20} height={20} />
        },
        {
            id: 8,
            title: "Low",
            icon: <LowIcon width={20} height={20}/>
        },
        {
            id: 9,
            title: "Irritated",
            icon: <IrritatedIcon width={20} height={20}/>
        },
        {
            id: 10,
            title: "Anxious",
            icon: <AnxiousIcon width={20} height={20}/>
        },
        {
            id: 11,
            title: "Stressed",
            icon: <StressedIcon width={20} height={20}/>
        },
        {
            id: 12,
            title: "High libido",
            icon: <HighLibidoIcon width={20} height={20}/>
        },
        {
            id: 13,
            title: "Low libido",
            icon: <LowLibidoIcon width={20} height={20}/>
        },
        {
            id: 14,
            title: "Low energy",
            icon: <LowEnergyIcon width={20} height={20}/>
        },
        {
            id: 15,
            title: "Self-critical",
            icon: <SelfCriticalIcon width={20} height={20}/>
        },
        {
            id: 16,
            title: "Sensitive",
            icon: <SensitiveIcon width={20} height={20}/>
        },
        {
            id: 17,
            title: "Emotional",
            icon: <EmotionalIcon width={20} height={20}/>
        },
        {
            id: 18,
            title: "Overthinking",
            icon: <OverthinkingIcon width={20} height={20}/>
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
                {options.map((option) =>
                {
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
                           
                            {option.icon}
                            <Text style={{ color: isSelected ? '#2B9696' : '#76767E', fontSize: 12, marginRight: 6 }}>
                                {option.title}
                            </Text>
                            {isSelected &&   <SvgXml style={tw`absolute right-0`} xml={IconTick}/> }
                          
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