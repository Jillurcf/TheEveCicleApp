import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../assets/Icons'
import MenstrualHealthCicleEducation from '../../component/articles/MenstrualHealthCicleEducation'
import CommonMythAboutMens from '../../component/articles/CommonMythAboutMens'
import WellnessAndSelfCare from '../../component/articles/WellnessAndSelfCare'

type Props = {}

const Article = ({ navigation }: {navigation:any}) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}  style={tw`bg-[#E8F6F6] -mt-[690] flex-1 p-[4%]`}>
            

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

export default Article

const styles = StyleSheet.create({})