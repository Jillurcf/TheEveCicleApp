import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';

type Props = {}

const MyDay = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "Prayer",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/Prayer.png")}
            />
        },
        {
            id: 2,
            title: "Excercise",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/Excercise.png")}
            />
        },
        {
            id: 3,
            title: "Travel",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/Travel.png")}
            />
        },
        {
            id: 4,
            title: "Dhikr",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/Dhikr.png")}
            />
        },
        {
            id: 5,
            title: "Sickness",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/Sickness.png")}    
            />
        },
        {
            id: 6,
            title: "Stress",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/Stress.png")}      
            />
        },
        {
            id: 7,
            title: "Socialized",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/Socialized.png")}      
            />
        },
        {
            id: 8,
            title: "Rested well",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/Restedwell.png")}      
            />
        },
        {
            id: 9,
            title: "Protected sex",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/ProtectedSex.png")}      
            />
        },
        {
            id: 10,
            title: "Unprotected sex",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyDay/UnprotectedSex.png")}      
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
            <Text style={tw`text-black text-lg font-SatoshiBold`}>My day</Text>
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

export default MyDay

const styles = StyleSheet.create({})