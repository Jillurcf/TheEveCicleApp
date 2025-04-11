import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';

type Props = {}

const MySymptoms = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "Headachs",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/HeadAchs.png")}
            />
        },
        {
            id: 2,
            title: "Cramps",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/Cramps.png")}
            />
        },
        {
            id: 3,
            title: "Loss of appetite",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/LossOfAppetite.png")}
            />
        },
        {
            id: 4,
            title: "Oily skin",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/OilySkin.png")}
            />
        },
        {
            id: 5,
            title: "Dry skin",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/DrySkin.png")}
            />
        },
        {
            id: 6,
            title: "Night sweets",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/NightSweats.png")}
            />
        },
        {
            id: 7,
            title: "Cravings",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/Cravings.png")}
            />
        },
        {
            id: 8,
            title: "Fatigue",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/Fatigue.png")}
            />
        },
        {
            id: 9,
            title: "Virginal dryness",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/VirginalDryness.png")}
            />
        },
        {
            id: 10,
            title: "Breast tenderness",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/BreastTenderness.png")}
            />
        },
        {
            id: 11,
            title: "Insomnia",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MySymptoms/Insomnia.png")}
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