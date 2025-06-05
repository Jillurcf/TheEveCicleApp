import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconCancelSub, IconLeftArrow, IconRightDrawer, IconSubscription, IconSubscriptionPlan, IconUpgrateToPremimum } from '../../assets/Icons'

type Props = {}

const BillingAndSubscription = ({ navigation }: { navigation: any }) => {
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
                    <Text style={tw`font-SatoshiBold text-[#121221] text-xl`}>Billing & subscription</Text>
                </View>
                <View style={tw`w-[10%]`}></View>
            </View>
            <View style={tw`mt-12 bg-white p-2 rounded-xl items-center`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("UpgrateToPremimum")}
                    style={tw`flex-row items-center gap-1 py-3`}>
                    <View style={tw`w-[15%] items-center`}>
                        <SvgXml xml={IconUpgrateToPremimum} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#3A3A47] font-SatoshiBold`}>Upgrade to premium account</Text>
                        <View style={tw`w-[90%]`}>
                            <Text style={tw`text-[#76767E] text-xs font-SatoshiRegular`}>
                                Unlock additional features by upgrading to premium.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Border Divider */}
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} >
                </View>

                {/* Second Touchable */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("UpgrateToPremimum")}
                    style={tw`flex-row items-center gap-1 py-3`}>
                    <View style={tw`w-[15%] items-center`}>
                        <SvgXml xml={IconSubscriptionPlan} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#3A3A47] font-SatoshiBold`}>My subscription plan</Text>
                        <View>
                            <Text style={tw`text-[#76767E] text-xs font-SatoshiRegular`}>
                                View and manage your current subscription.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Border Divider */}
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} >
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Invoice")}
                    style={tw`flex-row items-center gap-1 py-3`}>
                    <View style={tw`w-[15%] items-center`}>
                        <SvgXml xml={IconSubscription} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#3A3A47] font-SatoshiBold`}>Invoice</Text>
                        <Text style={tw`text-[#76767E] text-xs font-SatoshiRegular`}>
                            Access your billing history and download invoices.
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} ></View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CancelSubscription")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[15%] items-center`}>
                        <SvgXml xml={IconCancelSub} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#3A3A47] font-SatoshiBold`}>Cancel subscription</Text>
                        <Text style={tw`text-[#76767E] text-xs font-SatoshiRegular`}>
                            Stop your subscription plan at any time.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={tw`bg-white w-full rounded-2xl mt-4 items-center p-4`}>
                <Image style={tw`w-12 h-12`} source={require('../../assets/Imgages/Drawer/billingSub.png')} />
                <Text style={tw`font-SatoshiBold text-[#121221] mt-2 text-lg`}>Your data is protected</Text>
                <Text style={tw`font-SatoshiRegular mt-1 text-[#3A3A47] my-6 text-center`}>Your data belongs to you. We ensure it’s protected, never shared, and you can delete it at anytime.</Text>

                <View style={tw`my-4`}>
                    <TouchableOpacity style={tw`bg-[#EAF5F5] px-4 py-2 rounded-2xl`}>
                        <Text style={tw`font-SatoshiBold text-[#2B9696]`}>Learn more</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    )
}

export default BillingAndSubscription

const styles = StyleSheet.create({})