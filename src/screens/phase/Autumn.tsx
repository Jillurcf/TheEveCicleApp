import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header'
import { SvgXml } from 'react-native-svg'
import { IconCross } from '../../assets/Icons'
import tw from '../../lib/tailwind'
import AutumnImg from '../../assets/Imgages/SeasonInsights/imageSvg.svg'

type Props = {}

const Autumn = ({ navigation }) => {
    return (
        <ScrollView style={tw`flex-1 p-[4%] bg-[#E8F6F6]`}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <SvgXml xml={IconCross} />
            </TouchableOpacity>
            <View style={tw`items-center justify-center mt-6`}>
                {/* <Image style={tw`opacity-50`} source={require('../../assets/Imgages/Phase/autumn.png')} /> */}
                <AutumnImg style={tw`opacity-80`} width={180} height={180}/>
                <Text style={tw`text-[#121221] text-2xl font-SatoshiRegular opacity-60`}>Autumn</Text>
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
                <Text style={tw`text-black text-lg font-SatoshiBold px-[4%]`}>Spirit</Text>
                <Text style={tw`text-black font-SatoshiRegular py-1 px-[4%]`}>Very low; your body is shedding the unfertilized egg.</Text>
            </View>
            <View style={tw`bg-white w-full rounded-lg h-30 mt-4`}>
                <Text style={tw`text-black text-lg font-SatoshiBold px-[4%]`}>What to prioritize</Text>
                <View style={tw`flex-row items-center px-[4%]`}>
                    <View style={tw`h-1 w-1 bg-black rounded-full`} />

                    <Text style={tw`text-black font-SatoshiRegular py-1 px-[4%]`}>Make your plans.</Text>
                </View>
                <View style={tw`flex-row items-center px-[4%]`}>
                    <View style={tw`h-1 w-1 bg-black rounded-full`} />

                    <Text style={tw`text-black font-SatoshiRegular py-1 px-[4%]`}>Plant your intensions.</Text>
                </View>
                <View style={tw`flex-row items-center px-[4%]`}>
                    <View style={tw`h-1 w-1 bg-black rounded-full`} />

                    <Text style={tw`text-black font-SatoshiRegular py-1 px-[4%]`}>Strengthen your connection.</Text>
                </View>

            </View>
            <View style={tw`bg-white w-full rounded-lg h-18 mt-4`}>
                <Text style={tw`text-black text-lg font-SatoshiBold px-[4%]`}>Foods to eat</Text>
                <View style={tw`flex-row gap-2 px-[4%]`}>
                    <View style={tw`items-center`}>
                        <Image source={require("../../assets/Imgages/Phase/foodToEat/nuts.png")} />
                        <Text>Nuts</Text>
                    </View>
                    <View style={tw`items-center`}>
                        <Image source={require("../../assets/Imgages/Phase/foodToEat/Broccoli.png")} />
                        <Text>Broccoli</Text>
                    </View>
                    <View style={tw`items-center`}>
                        <Image source={require("../../assets/Imgages/Phase/foodToEat/harbalTea.png")} />
                        <Text>Harbal Tea</Text>
                    </View>
                </View>
            </View>
            <View style={tw`bg-white w-full rounded-lg h-18 mt-4 mb-12 px-[0%]`}>
                <Text style={tw`text-black text-lg font-SatoshiBold px-[4%]`}>Spritual reflections</Text>
                <Text style={tw`text-black font-SatoshiRegular py-1 px-[4%]`}>Follicular phase, estrogen rising.</Text>
            </View>
            <StatusBar translucent={false} />
        </ScrollView>
    )
}

export default Autumn

const styles = StyleSheet.create({})