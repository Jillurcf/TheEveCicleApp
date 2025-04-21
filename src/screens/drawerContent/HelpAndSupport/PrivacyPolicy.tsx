import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../../assets/Icons'

type Props = {}

const PrivacyPolicy = ({ navigation }: { navigation: any }) => {
    return (
        <ScrollView style={tw`flex-1 bg-[#E8F6F6] p-4`}>
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Privacy policy </Text>
                <View></View>
            </View>
            <View style={tw`mt-4`}>
                <Text style={tw`text-black text-lg font-SatoshiBold`}>Acceptance of terms</Text>
                <Text style={tw`text-black font-SatoshiRegular py-1`}>By downloading, accessing, or using The Eve Cycle app, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use the app.</Text>
            </View>
             <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})