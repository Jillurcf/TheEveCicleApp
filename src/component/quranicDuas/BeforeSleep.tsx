import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'

type Props = {}

const BeforeSleep = (props: Props) => {
    const data = [
        {
            id: 1, title: 'Morning dua after wake up',
            image: require('../../assets/Imgages/Sanctum/Resource/QuranicDuas/img.png'),
        },
        {
            id: 2, title: 'Dua before enter washroom',
            image: require('../../assets/Imgages/Sanctum/Resource/QuranicDuas/img2.png'),
        },
        {
            id: 3, title: 'Dua for family & children',
            image: require('../../assets/Imgages/Sanctum/Resource/QuranicDuas/img3.png'),
        },
        {
            id: 4, title: 'Dua for family & children',
            image: require('../../assets/Imgages/Sanctum/Resource/QuranicDuas/img.png'),
        },
    ]
    return (
        <View style={tw``}>
            <Text style={tw`text-black text-xl font-SatoshiBold`}>Before sleep</Text>
            <FlatList
                contentContainerStyle={tw`mt-4 items-center`}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={tw` rounded-lg `}>
                        <Image style={tw`w-24 mr-2 h-24 rounded-lg`} source={item?.image} />
                        <Text style={tw` text-xs w-22 text-start text-[#3A3A47] font-SatoshiRegular mt-1`}
                            numberOfLines={2}
                        >{item?.title}

                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.toString()}
            />

        </View>
    )
}

export default BeforeSleep

const styles = StyleSheet.create({})