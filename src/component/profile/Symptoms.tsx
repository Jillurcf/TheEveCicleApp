import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';

type Props = {}

const Symptoms = (props: Props) => {
    const options = [

        {
            id: 1,
            title: "Self-critical",

        },
        {
            id: 2,
            title: "Headache",
        },

        {
            id: 3,
            title: "Oily skin",

        },
        {
            id: 4,
            title: "Cramp",
        },

        {
            id: 5,
            title: "Night sweet",

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
        <View style={tw`bg-white rounded-2xl p-[2%]`}>
            <Text style={tw`text-black text-lg font-SatoshiBold`}>My Symptoms</Text>
            <View style={tw`my-4 flex-row flex-wrap gap-1`}>
                {options.map((option) => {
                    const isSelected = selectedOptions.includes(option.title);

                    return (
                        <TouchableOpacity
                            key={option.id}
                            onPress={() => toggleOption(option.title)}
                            style={[
                                tw`mb-2 relative rounded-full flex-row items-center gap-1 px-2 py-2`,
                                {
                                    backgroundColor: isSelected ? '#EAF5F5' : '#EAF5F5',
                                }
                            ]}
                        >

                            {option.icon}
                            <Text style={{ color: isSelected ? '#2B9696' : '#2B9696', fontSize: 14, marginRight: 10 }}>
                                {option.title}
                            </Text>


                        </TouchableOpacity>
                    );
                }
                )}
            </View>
        </View>
    )
}

export default Symptoms

const styles = StyleSheet.create({})