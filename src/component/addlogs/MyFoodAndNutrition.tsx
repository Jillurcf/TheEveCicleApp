import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';
import IconHealthyMeals from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/HealthyMeals.svg'
import IconSkippedMeals from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/SkiippedMeals.svg'
import IconLowProteinIntake from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/LowProteinIntake.svg'
import IconHighProteinIntake from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/HighProteinIntake.svg'
import IconDehydrated from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/Dehydrated.svg'
import IconDrankEnoughWater from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/DrinkEnoughWater.svg'
import IconJunkFood from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/JunkFood.svg'
import IconHealthySnacks from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/HealthySnacks.svg'
import IconSugarySnaks from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/SugarySnacks.svg'
import IconUnHealthyFood from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/UnhealthyFood.svg'
import IconHomeMadeFood from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/HomeMadeFood.svg'
// import IconHealthyMeals from '../../assets/Imgages/AddLogs/MyFoodAndNutrition/HealthyMeals.svg'

type Props = {}

const MyFoodAndNutrition = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "Healthy meals",
            icon: <IconHealthyMeals width={20} height={20}
            />
        },
        {
            id: 2,
            title: "Skipped meals",
            icon: <IconSkippedMeals width={20} height={20}
            />
        },
        {
            id: 3,
            title: "Low protein intake",
            icon: <IconLowProteinIntake width={20} height={20}
            />
        },
        {
            id: 4,
            title: "High protein intake",
            icon: <IconHighProteinIntake width={20} height={20}
            />
        },
        {
            id: 5,
            title: "Dehydrated",
            icon: <IconDehydrated width={20} height={20}
            />
        },
        {
            id: 6,
            title: "Drank enough water",
            icon: <IconDrankEnoughWater width={20} height={20}
            />
        },
        {
            id: 7,
            title: "Junk food",
            icon: <IconJunkFood width={20} height={20}
            />
        },
        {
            id: 8,
            title: "Healthy snacks",
            icon: <IconHealthySnacks width={20} height={20}
            />
        },
        {
            id: 9,
            title: "Sugary snacks",
            icon: <IconSugarySnaks width={20} height={20}
            />
        },
        {
            id: 10,
            title: "Unhealthy foods",
            icon: <IconUnHealthyFood width={20} height={20}
            />
        },
        {
            id: 11,
            title: "Homemeade foods",
            icon: <IconHomeMadeFood width={30} height={30}
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
            <Text  style={tw`text-[#121221] my-2 font-SatoshiBold`}>My food & nutrition</Text>
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

export default MyFoodAndNutrition

const styles = StyleSheet.create({})