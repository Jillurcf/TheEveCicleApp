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
            icon: <Light width={25} height={25}
            />
        },
        {
            id: 2,
            title: "Normal",
            icon: <Normal width={25} height={25}
            />
        },
        {
            id: 3,
            title: "Heavy",
            icon: <Heavy width={25} height={25}
            />
        },
        {
            id: 4,
            title: "Very heavy",
            icon: <Extream width={25} height={25}
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
            <Text  style={tw`text-[#121221] my-2 font-SatoshiBold`}>My winter flow</Text>
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

export default MyWinterFlow

const styles = StyleSheet.create({})