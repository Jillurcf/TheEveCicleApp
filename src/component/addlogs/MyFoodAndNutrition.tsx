import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';

type Props = {}

const MyFoodAndNutrition = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "Healthy meals",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/HealtyMeals.png")}
            />
        },
        {
            id: 2,
            title: "Skipped meals",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/SkippedMeals.png")}
            />
        },
        {
            id: 3,
            title: "Low protein intake",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/LowProteinIntake.png")}
            />
        },
        {
            id: 4,
            title: "High protein intake",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/HighProteinintake.png")}
            />
        },
        {
            id: 5,
            title: "Dehydrated",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/Dehydrated.png")}
            />
        },
        {
            id: 6,
            title: "Drank enough water",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/DrankEnoughWater.png")}
            />
        },
        {
            id: 7,
            title: "Junk food",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/Junkfoods.png")}
            />
        },
        {
            id: 8,
            title: "Healthy snacks",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/HealthySnacks.png")}
            />
        },
        {
            id: 9,
            title: "Sugary snacks",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/SugarySnacks.png")}
            />
        },
        {
            id: 10,
            title: "Unhealthy foods",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/UnhealthyFoods.png")}
            />
        },
        {
            id: 11,
            title: "Homemeade foods",
            icon: <Image source={require("../../assets/Imgages/AddLogs/MyFoodAndNutrition/HomemadeFoods.png")}
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
            <Text style={tw`text-black text-lg font-SatoshiBold`}>My food & nutrition</Text>
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
                            <Text style={{ color: isSelected ? '#2B9696' : 'black', fontSize: 14, marginRight: 6 }}>
                                {option.title}
                            </Text>
                            {isSelected &&   <SvgXml style={tw`absolute right-1`} xml={IconTick}/> }
                          
                        </TouchableOpacity>
                    );
                }
                )}
            </View>
        </View>
    )
}

export default MyFoodAndNutrition

const styles = StyleSheet.create({})