import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../assets/Icons'

type Props = {}

const Articles = ({navigaiton}) => {
    return (
        <View style={tw`bg-[#E8F6F6] flex-1 p-[4%]`}>
            <View style={tw`flex-row items-center justify-between`}>
               <TouchableOpacity
               onPress={() => navigaiton.goBack()}
               >
               <SvgXml xml={IconLeftArrow} />
               </TouchableOpacity>
                <Text style={tw`text-black font-SatoshiBold`}>Articles</Text>
                <View></View>
            </View>
            <View style={tw` text-black mt-4 `}>
                <Text style={tw`font-SatoshiBold text-lg`}>
                    Menstrual health & cycle education
                </Text>
            </View>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#E8F6F6"
                translucent
                ={false}
            />
        </View>
    )
}

export default Articles

const styles = StyleSheet.create({})