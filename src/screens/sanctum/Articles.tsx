import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../assets/Icons'
import MenstrualHealthCicleEducation from '../../component/articles/MenstrualHealthCicleEducation'
import CommonMythAboutMens from '../../component/articles/CommonMythAboutMens'
import WellnessAndSelfCare from '../../component/articles/WellnessAndSelfCare'

type Props = {}

const Articles = ({ navigation }) => {

    return (
        <ScrollView style={tw`bg-[#E8F6F6] flex-1 p-[4%]`}>
            <View style={tw`flex-row items-center justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation?.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`text-black text-xl font-SatoshiBold`}>Articles</Text>
                <View></View>
            </View>

            <View style={tw`mt-4`}>
                <MenstrualHealthCicleEducation />
            </View>
            <View >
                <CommonMythAboutMens />
            </View>
            <View >
                <WellnessAndSelfCare />
            </View>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#E8F6F6"
                translucent
                ={false}
            />
        </ScrollView>
    )
}

export default Articles

const styles = StyleSheet.create({})