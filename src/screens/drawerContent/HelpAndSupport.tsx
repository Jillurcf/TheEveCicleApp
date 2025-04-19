import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconCancelSub, IconCustomerSupport, IconFAQ, IconLeftArrow, IconPrivacyPolicy, IconRightDrawer, IconStepbyStepTutorials, IconSubscription, IconSubscriptionPlan, IconTermsOfUse, IconUpgrateToPremimum, IconVistOurWebsite } from '../../assets/Icons'

type Props = {}

const HelpAndSupport = ({ navigation }: { navigation: any }) => {
    return (
        <ScrollView style={tw`flex-1 bg-[#E8F6F6] p-4`}>
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Help center </Text>
                <View></View>
            </View>
            <View style={tw`mt-6 bg-white p-2 rounded-xl items-center`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CustomerSupport")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconCustomerSupport} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>Customer support</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                            Get assistance with any questions or issues you may have.
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Border Divider */}
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} >
                </View>

                {/* Second Touchable */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("HelpFaq")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconFAQ} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>FAQ page</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                            Find quick answers to commonly asked questions.
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* Border Divider */}
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} >
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Invoice")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconStepbyStepTutorials} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>Setp by step tutorials</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                        Learn how to make the most of the Seasons app with easy guides and tutorials.
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} ></View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CancelSubscription")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconPrivacyPolicy} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>Privacy policy</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                        Understand how we protect and handle your personal data
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} ></View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CancelSubscription")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconTermsOfUse} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>Terms of use</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                        Review the guidelines and agreements for using the Season app.
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} ></View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CancelSubscription")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconVistOurWebsite} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>Visit our website</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                        Discover more features and resources on our official website.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
           
            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    )
}

export default HelpAndSupport

const styles = StyleSheet.create({})