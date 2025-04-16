import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind';

type Props = {}

const WellnessAndSelfCare = (props: Props) => {
    const DATA = [
        {
            id: '1',
            title: `Understanding the ${'\n'}Menstrual Cycle`,
            icon: require('../../assets/Imgages/Sanctum/articles/UnderstandingTheMenstrualCicle.png'),
        },
        {
            id: '2',
            title: `Islamic Guidelines  ${'\n'}on Menstrual Health`,
            icon: require('../../assets/Imgages/Sanctum/articles/IslamicGuidance.png'),
        },
        {
            id: '3',
            title: `Foods to Eat During${'\n'} Each Phase`,
            icon: require('../../assets/Imgages/Sanctum/articles/foodstoEatDriven.png'),
        },
        {
            id: '4',
            title: 'Second Item',
            icon: require('../../assets/Imgages/Sanctum/articles/IslamicGuidance.png'),
        },
        {
            id: '5',
            title: 'Third Item',
            icon: require('../../assets/Imgages/Sanctum/articles/foodstoEatDriven.png'),
        },
    ];
    return (
        <View>
            <View style={tw` text-black `}>
                            <Text style={tw`font-SatoshiBold text-lg`}>
                                Wellness & Self-care
                            </Text>
                        </View>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    renderItem={(item) => {
                        console.log("item", item)
                        return (
                            <View style={tw` my-4 mr-2 items-center `}>
                              
                                <View>
                                    <Image
                                        source={item?.item?.icon}
                                        style={tw`w-32 h-32 rounded-lg`}
                                    />
                                </View>
                                <Text style={tw`text-black font-SatoshiRegular text-center mt-1 font-SatoshiRegular`}> {item?.item?.title}</Text>
                            </View>
                        )
                    }
                    }

                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    // contentContainerStyle={{ paddingBottom: 100 }}
                // ListEmptyComponent={
                //     <View style={tw`flex-1 items-center justify-center`}>
                //         <Text style={tw`text-black font-SatoshiRegular`}>
                //             No articles found
                //         </Text>
                //     </View>
                // }
                />
            </View>
        </View>
    )
}

export default WellnessAndSelfCare

const styles = StyleSheet.create({})