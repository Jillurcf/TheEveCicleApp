import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';
import IconNausea from '../../assets/Imgages/AddLogs/MyDigestion/Nausea.svg'
import IconConstipation from '../../assets/Imgages/AddLogs/MyDigestion/Constipation.svg'
import IconDiarrahea from '../../assets/Imgages/AddLogs/MyDigestion/Diarrhea.svg'
import IconHealthyBowels from '../../assets/Imgages/AddLogs/MyDigestion/HealthyBowels.svg'


type Props = {}

const MyDigestion = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "Nausea",
            icon: <IconNausea width={25} height={25}
            />
        },
        {
            id: 2,
            title: "Constipation",
            icon: <IconConstipation width={25} height={25}
            />
        },
        {
            id: 3,
            title: "Diarrhea",
            icon: <IconDiarrahea width={25} height={25}
            />
        },
        {
            id: 4,
            title: "Healthy bowels",
            icon: <IconHealthyBowels width={25} height={25}
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
            <Text  style={tw`text-[#121221] my-2 font-SatoshiBold`}>My digestion</Text>
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

export default MyDigestion

const styles = StyleSheet.create({})