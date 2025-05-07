import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';
import Light from '../../assets/Imgages/AddLogs/MyWinterFlow/Light.svg'
import Normal from '../../assets/Imgages/AddLogs/MyWinterFlow/Normal.svg'
import Heavy from '../../assets/Imgages/AddLogs/MyWinterFlow/Heavy.svg'
import Extream from '../../assets/Imgages/AddLogs/MyWinterFlow/VeryHeavy.svg'


type Props = {}

const MyWinterFlow = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "Light",
            icon: <Light width={30} height={30}
            />
        },
        {
            id: 2,
            title: "Normal",
            icon: <Normal width={30} height={30}
            />
        },
        {
            id: 3,
            title: "Heavy",
            icon: <Heavy width={30} height={30}
            />
        },
        {
            id: 4,
            title: "Extream",
            icon: <Extream width={30} height={30}
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
            <Text style={tw`text-black text-lg font-SatoshiBold`}>My winter flow</Text>
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

export default MyWinterFlow

const styles = StyleSheet.create({})