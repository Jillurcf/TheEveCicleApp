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
                <View style={tw`w-[10%]`}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <SvgXml xml={IconLeftArrow} />
                    </TouchableOpacity>
                </View>
                <View style={tw`w-[80%] items-center`}>
                    <Text style={tw`font-SatoshiBold text-[#121221] text-xl`}>Privacy policy </Text>
                </View>
                <View style={tw`w-[10%]`}></View>
            </View>
            <View style={tw`mt-4`}>
                <Text style={tw`text-black text-lg font-SatoshiBold`}>Acceptance of terms</Text>
                <Text style={tw`text-[#3A3A47] font-SatoshiRegular py-1`}>By downloading, accessing, or using The Eve Cycle app, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use the app.</Text>
            </View>
            <View style={tw`mt-4`}>
                <Text style={tw`text-black text-lg font-SatoshiBold`}> Purpose of the app</Text>
                <Text style={tw`text-[#3A3A47] font-SatoshiRegular py-1`}>The Eve Cycle is a health and wellness application designed to track menstrual cycles and provide general health insights. It is not intended to replace professional medical advice, diagnosis, or treatment. Always consult a healthcare professional for any medical concerns.</Text>
            </View>
            <View style={tw`mt-4`}>
                <Text style={tw`text-black text-lg font-SatoshiBold`}> User responsibility</Text>
                <Text style={tw`text-[#3A3A47] font-SatoshiRegular py-1`}>
                    You are responsible for providing accurate information when using the app to ensure accurate insights and predictions.
                </Text>
            </View>
            <View style={tw`mt-4`}>
                <Text style={tw`text-black text-lg font-SatoshiBold`}> Privacy and data security</Text>
                <Text style={tw`text-[#3A3A47] font-SatoshiRegular py-1`}>
                  We prioritize your privacy and ensure your data is encrypted and stored securely. For details on how we handle your personal information, please refer to our Privacy Policy.
                </Text>
            </View>
            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})