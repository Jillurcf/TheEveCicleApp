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
                <View style={tw`w-[10%]`}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <SvgXml xml={IconLeftArrow} />
                    </TouchableOpacity>
                </View>
                <View style={tw`w-[80%] items-center`}>
                    <Text style={tw`font-SatoshiBold text-[#121221] text-xl`}>Help center </Text>
                </View>
                <View style={tw`w-[10%]`}></View>
            </View>
            <View style={tw`mt-6 bg-white p-2 rounded-xl items-center`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CustomerSupport")}
                    style={tw`flex-row items-center py-3`}>
                    <View style={tw`w-[18%] items-center`}>
                        <SvgXml xml={IconCustomerSupport} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#3A3A47] font-SatoshiBold`}>Customer support</Text>
                        <View style={tw`w-[90%]`}>
                            <Text style={tw`text-[#76767E] text-xs font-SatoshiRegular`}>
                                Get assistance with any questions or issues you may have.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Border Divider */}
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} >
                </View>

                {/* Second Touchable */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("HelpFaq")}
                    style={tw`flex-row items-center py-3`}>
                    <View style={tw`w-[18%] items-center`}>
                        <SvgXml xml={IconFAQ} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#3A3A47] font-SatoshiBold`}>FAQ page</Text>
                        <View style={tw`w-[]`}>
                            <Text style={tw`text-[#76767E] text-xs font-SatoshiRegular`}>
                                Find quick answers to commonly asked questions.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Border Divider */}
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} >
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("StepByStepTutorials")}
                    style={tw`flex-row items-center py-3`}>
                    <View style={tw`w-[18%] items-center`}>
                        <SvgXml xml={IconStepbyStepTutorials} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#3A3A47] font-SatoshiBold`}>Setp by step tutorials</Text>
                       <View style={tw`w-[]`}>
                         <Text style={tw`text-[#76767E] text-xs font-SatoshiRegular`}>
                            Learn how to make the most of the Seasons app with easy guides and tutorials.
                        </Text>
                       </View>
                    </View>
                </TouchableOpacity>
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} ></View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("PrivcyPolicy")}
                    style={tw`flex-row items-center py-3`}>
                    <View style={tw`w-[18%] items-center`}>
                        <SvgXml xml={IconPrivacyPolicy} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#3A3A47] font-SatoshiBold`}>Privacy policy</Text>
                        <Text style={tw`text-[#76767E] text-xs font-SatoshiRegular`}>
                            Understand how we protect and handle your personal data
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} ></View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("TermsOfUse")}
                    style={tw`flex-row items-center py-3`}>
                    <View style={tw`w-[18%] items-center`}>
                        <SvgXml xml={IconTermsOfUse} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#3A3A47] font-SatoshiBold`}>Terms of use</Text>
                        <Text style={tw`text-[#76767E] text-xs font-SatoshiRegular`}>
                            Review the guidelines and agreements for using the Season app.
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* <View style={tw`border-b w-full border-gray-300 z-40 my-2`} ></View> */}
                {/* <TouchableOpacity
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
                </TouchableOpacity> */}
            </View>

            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    )
}

export default HelpAndSupport

const styles = StyleSheet.create({})