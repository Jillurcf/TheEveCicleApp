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
            icon: <HeadAchsIcon width={30} height={30}/>
        },
        {
            id: 2,
            title: "Cramps",
            icon: <CrampsIcon width={30} height={30}
            />
        },
        {
            id: 3,
            title: "Loss of appetite",
            icon: <LossOfAppetiteIcon width={30} height={30}
            />
        },
        {
            id: 4,
            title: "Oily skin",
            icon: <OilySckinIcon width={30} height={30}/>
        },
        {
            id: 5,
            title: "Dry skin",
            icon: <DrySckinIcon width={30} height={30}
            />
        },
        {
            id: 6,
            title: "Night sweets",
            icon: <NightSwweetIcon width={30} height={30}
            />
        },
        {
            id: 7,
            title: "Cravings",
            icon: <CravingsIcon width={30} height={30}
            />
        },
        {
            id: 8,
            title: "Fatigue",
            icon: <FatiqueIcon width={30} height={30}
            />
        },
        {
            id: 9,
            title: "Virginal dryness",
            icon: <ViginalDrynessIcon width={30} height={30}
            />
        },
        {
            id: 10,
            title: "Breast tenderness",
            icon: <BreastTendernessIcon width={30} height={30}
            />
        },
        {
            id: 11,
            title: "Insomnia",
            icon: <InsomniaIcon width={30} height={30}
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
            <Text style={tw`text-black text-lg font-SatoshiBold`}>My Symptoms</Text>
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

export default MySymptoms

const styles = StyleSheet.create({})