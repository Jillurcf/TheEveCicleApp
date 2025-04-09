import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header'
import { SvgXml } from 'react-native-svg'
import { IconCross } from '../../assets/Icons'
import tw from '../../lib/tailwind'

type Props = {}

const Autumn = ({ navigation }) => {
    return (
        <ScrollView style={tw`flex-1 p-[4%] bg-[#E8F6F6]`}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <SvgXml xml={IconCross} />
            </TouchableOpacity>
            <View style={tw`items-center justify-center mt-6`}>
                <Image style={tw`opacity-50`} source={require('../../assets/Imgages/Phase/autumn.png')} />
                <Text style={tw`text-[#121221] text-2xl font-SatoshiBold opacity-60`}>Autumn</Text>
            </View>
            <View style={tw`bg-white w-full rounded-lg h-18 mt-4 p-[2%]`}>
                <Text style={tw`text-black text-lg font-SatoshiBold px-[4%]`}>Body</Text>
                <Text style={tw`text-black font-SatoshiRegular py-1 px-[4%]`}>Follicular phase, estrogen rising.</Text>
            </View>
            <View style={tw`bg-white w-full rounded-lg h-18 mt-4 p-[2%]`}>
                <Text style={tw`text-black text-lg font-SatoshiBold px-[4%]`}>Mind</Text>
                <Text style={tw`text-black font-SatoshiRegular py-1 px-[4%]`}>Creative, inquisitive, motivated, enthusiastic.</Text>
            </View>
            <View style={tw`bg-white w-full rounded-lg h-18 mt-4 px-[2%]`}>
            <Text style={tw`text-black text-lg font-SatoshiBold px-[4%]`}>Sprit</Text>
            <Text style={tw`text-black font-SatoshiRegular py-1 px-[4%]`}>Very low; your body is shedding the unfertilized egg.</Text>
            </View>
            <View style={tw`bg-white w-full rounded-lg h-18 mt-4`}>

            </View>
            <StatusBar translucent={false} />
        </ScrollView>
    )
}

export default Autumn

const styles = StyleSheet.create({})