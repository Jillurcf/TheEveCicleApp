import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';
import HeadAchsIcon from '../../assets/Imgages/AddLogs/MySymptoms/HeadAcchs.svg'
import CrampsIcon from '../../assets/Imgages/AddLogs/MySymptoms/Cramps.svg'
import LossOfAppetiteIcon from '../../assets/Imgages/AddLogs/MySymptoms/LossOfAppetite.svg'
import OilySckinIcon from '../../assets/Imgages/AddLogs/MySymptoms/OilySkin.svg'
import DrySckinIcon from '../../assets/Imgages/AddLogs/MySymptoms/DrySkin.svg'
import NightSwweetIcon from '../../assets/Imgages/AddLogs/MySymptoms/NigthSweets.svg'
import CravingsIcon from '../../assets/Imgages/AddLogs/MySymptoms/Carvings.svg'
import FatiqueIcon from '../../assets/Imgages/AddLogs/MySymptoms/Fatigue.svg'
import ViginalDrynessIcon from '../../assets/Imgages/AddLogs/MySymptoms/VirginalDryness.svg'
import BreastTendernessIcon from '../../assets/Imgages/AddLogs/MySymptoms/BreastTenderness.svg'
import InsomniaIcon from '../../assets/Imgages/AddLogs/MySymptoms/Insomnia.svg'

type Props = {}

const MySymptoms = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "Headachs",
            icon: <HeadAchsIcon width={20} height={20}/>
        },
        {
            id: 2,
            title: "Cramps",
            icon: <CrampsIcon width={20} height={20}
            />
        },
        {
            id: 3,
            title: "Loss of appetite",
            icon: <LossOfAppetiteIcon width={20} height={20}
            />
        },
        {
            id: 4,
            title: "Oily skin",
            icon: <OilySckinIcon width={20} height={20}/>
        },
        {
            id: 5,
            title: "Dry skin",
            icon: <DrySckinIcon width={20} height={20}
            />
        },
        {
            id: 6,
            title: "Night sweets",
            icon: <NightSwweetIcon width={20} height={20}
            />
        },
        {
            id: 7,
            title: "Cravings",
            icon: <CravingsIcon width={20} height={20}
            />
        },
        {
            id: 8,
            title: "Fatigue",
            icon: <FatiqueIcon width={20} height={20}
            />
        },
        {
            id: 9,
            title: "Virginal dryness",
            icon: <ViginalDrynessIcon width={20} height={20}
            />
        },
        {
            id: 10,
            title: "Breast tenderness",
            icon: <BreastTendernessIcon width={20} height={20}
            />
        },
        {
            id: 11,
            title: "Insomnia",
            icon: <InsomniaIcon width={20} height={20}
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
            <Text  style={tw`text-[#121221] my-2 font-SatoshiBold`}>My Symptoms</Text>
            <View style={tw`my-2 flex-row flex-wrap gap-1`}>
                {options.map((option) =>
                {
                    const isSelected = selectedOptions.includes(option.title);

                    return (
                        <TouchableOpacity
                            key={option.id}
                            onPress={() => toggleOption(option.title)}
                            style={[
                                tw`mb-2 relative rounded-full flex-row items-center gap-1 px-1 py-1`,
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

export default MySymptoms

const styles = StyleSheet.create({})