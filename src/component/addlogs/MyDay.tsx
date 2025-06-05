import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';
import IconPrayer from '../../assets/Imgages/AddLogs/MyDay/Prayer.svg'
import IconExercise from '../../assets/Imgages/AddLogs/MyDay/Exercise.svg'
import IconTravel from '../../assets/Imgages/AddLogs/MyDay/Travel.svg'
import IconDhikir from '../../assets/Imgages/AddLogs/MyDay/Dhikir.svg'
import IconSickness from '../../assets/Imgages/AddLogs/MyDay/Sickness.svg'
import IconStress from '../../assets/Imgages/AddLogs/MyDay/Stress.svg'
import IconRestedWell from '../../assets/Imgages/AddLogs/MyDay/Restedwell.svg'
import IconSocialized from '../../assets/Imgages/AddLogs/MyDay/Socialized.svg'
import IconProtectedSex from '../../assets/Imgages/AddLogs/MyDay/ProtectedSex.svg'
import IconUnProtectedSex from '../../assets/Imgages/AddLogs/MyDay/UnprotectedSex.svg'

type Props = {}

const MyDay = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "Prayer",
            icon: <IconPrayer width={25} height={25}
            />
        },
        {
            id: 2,
            title: "Excercise",
            icon: <IconExercise width={25} height={25}
            />
        },
        {
            id: 3,
            title: "Travel",
            icon: <IconTravel width={25} height={25}
            />
        },
        {
            id: 4,
            title: "Dhikr",
            icon: <IconDhikir width={25} height={25}
            />
        },
        {
            id: 5,
            title: "Sickness",
            icon: <IconSickness width={20} height={20}
            />
        },
        {
            id: 6,
            title: "Stress",
            icon: <IconStress width={20} height={20} 
            />
        },
        {
            id: 7,
            title: "Socialized",
            icon: <IconSocialized width={20} height={20}
            />
        },
        {
            id: 8,
            title: "Rested well",
            icon: <IconRestedWell width={20} height={20}
            />
        },
        {
            id: 9,
            title: "Protected sex",
            icon: <IconProtectedSex width={20} height={20}  
            />
        },
        {
            id: 10,
            title: "Unprotected sex",
            icon: <IconUnProtectedSex width={20} height={20} 
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
            <Text  style={tw`text-[#121221] my-2 font-SatoshiBold`}>My day</Text>
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

export default MyDay

const styles = StyleSheet.create({})