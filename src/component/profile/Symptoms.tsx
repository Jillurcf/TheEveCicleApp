import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { IconTick } from '../../assets/Icons';

type Props = {}

const Symptoms = (props: Props) => {
    const options = [
        { id: 1, title: "Self-critical" },
        { id: 2, title: "Headache" },
        { id: 3, title: "Oily skin" },
        { id: 4, title: "Cramp" },
        { id: 5, title: "Night sweet" },
    ];

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
            <View style={tw`my-4 flex-row flex-wrap gap-2`}>
                {options.map((option) => {
                    const isSelected = selectedOptions.includes(option.title);

                    return (
                        <TouchableOpacity
                            key={option.id}
                            onPress={() => toggleOption(option.title)}
                            style={[
                                tw`mb-2 relative rounded-full flex-row items-center gap-1 justify-center py-2 px-4`,
                                {
                                    backgroundColor: isSelected ? '#2B9696' : '#EAF5F5',
                                },
                            ]}
                        >
                            {isSelected && (
                                <SvgXml xml={IconTick} width={14} height={14} style={{ marginRight: 6 }} />
                            )}
                            <Text
                                style={{
                                    color: isSelected ? '#FFFFFF' : '#2B9696',
                                    fontSize: 14,
                                    fontFamily: 'Satoshi-Bold',
                                }}
                            >
                                {option.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default Symptoms;

const styles = StyleSheet.create({});
