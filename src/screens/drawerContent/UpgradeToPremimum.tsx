import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconCross, IconLeftArrow, IconTick } from '../../assets/Icons'
import TButton from '../../component/TButton'
import { RadioButton } from 'react-native-ui-lib'

type Props = {}

const UpgradeToPremimum = ({ navigation }: { navigation: any }) => {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const data = [

        {
            "id": 2,
            "plan_name": "Monthly",
            "duration": "30",
            "current_price": 10.54,
            "old_price": null,
            "price_save": null,
            "features": [
                "Access to basic features",
                "Priority support",
                "Cancel anytime"
            ],
            "is_active": 1,
            "created_at": "2025-04-18T13:01:16.000000Z",
            "updated_at": "2025-04-18T13:01:16.000000Z",
            "current_plan": false
        },
        {
            "id": 3,
            "plan_name": "Annually",
            "duration": "365",
            "current_price": 40.96,
            "old_price": 51.15,
            "price_save": 20,
            "features": [
                "Access to basic features",
                "Cancel anytime"
            ],
            "is_active": 1,
            "created_at": "2025-04-18T13:01:16.000000Z",
            "updated_at": "2025-04-18T13:01:16.000000Z",
            "current_plan": false
        }


    ]

    return (
        <ScrollView style={tw`flex-1 bg-[#E8F6F6] p-4`}>
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconCross} />
                </TouchableOpacity>

            </View>
            <View style={tw`w-full items-center mt-8`}>
                <Image style={tw`w-24 h-24`} source={require("../../assets/Imgages/SplashIcon.png")} />
                <Text style={tw`text-center py-6 font-SatoshiBold text-xl`}>Unlock premimum features & {"\n"} advanced cycle tracking tools!</Text>
            </View>
            <View style={tw`p-4`}>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={tw`bg-white rounded-lg mr-4 p-6 mb-4 shadow-md`}>

                            <View style={tw`flex-row gap-2`}>
                                <RadioButton color='#84C2C2' selected={selectedPlan === item?.id} onPress={() => setSelectedPlan(item?.id)} />
                                <Text style={tw`text-xl font-SatoshiBold text-black py-2`}>{item.plan_name}</Text>
                            </View>

                          
                            <Text style={tw`text-sm text-gray-500`}>Duration: {item.duration} days</Text>
                            <Text style={tw`text-lg font-SatoshiBold mt-2 text-black`}>
                                ${item.current_price.toFixed(2)}
                                {item.old_price && (
                                    <Text style={tw`text-sm line-through text-gray-400 ml-2`}>
                                        ${item.old_price.toFixed(2)}
                                    </Text>
                                )}
                            </Text>
                            {item.price_save && (
                                <Text style={tw`text-green-500 text-sm`}>Save {item.price_save}%</Text>
                            )}
                            <View style={tw`mt-2`}>
                                {item.features.map((feature, index) => (
                                    <View style={tw`flex-row gap-4`}>
                                        <SvgXml xml={IconTick} />
                                        <Text key={index} style={tw`text-black text-sm`}>
                                            {feature}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={tw`w-full items-center`}>
                <TButton containerStyle={tw`bg-[#4FA8A8] w-90%`} title='Continue - £6.99/month' />
                <Text style={tw`text-xs text-center my-2`}>No hidden fees *
                    Cancel anytime </Text>
            </View>
        </ScrollView>
    )
}

export default UpgradeToPremimum

const styles = StyleSheet.create({})