import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import tw from '../lib/tailwind'
import { IconLeftArrow } from '../assets/Icons'
import MorningAndEvening from '../component/quranicDuas/MorningAndEvening'
import Traveling from '../component/quranicDuas/Traveling'
import BeforeSleep from '../component/quranicDuas/BeforeSleep'

type Props = {}

const QuranicAndPropheticDuas = ({ navigation }: { navigation: any }) => {
    return (
        <ScrollView contentContainerStyle={{  backgroundColor: '#E8F6F6', padding: '4%', marginBottom: 700, }}>

            <View style={tw``}>
                {/* =========morning and evening */}
                <View style={tw`mt-4`}>
                    <MorningAndEvening />

                </View>
                {/* ========= Traveling ============== */}
                <View style={tw`mt-4`}>
                    <Traveling />

                </View>
                {/* ========= Before sleep ============== */}
                <View style={tw`mt-4`}>
                    <BeforeSleep />

                </View>
            </View>
        </ScrollView>
    )
}

export default QuranicAndPropheticDuas

const styles = StyleSheet.create({})