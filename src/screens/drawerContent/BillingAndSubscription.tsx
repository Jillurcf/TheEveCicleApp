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
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Billing & subscription</Text>
                <View></View>
            </View>
            <View style={tw`mt-12 bg-white p-2 rounded-xl items-center`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("UpgrateToPremimum")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconUpgrateToPremimum} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>Upgrade to premium account</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                            Unlock additional features by upgrading to premium.
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Border Divider */}
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} >
                </View>

                {/* Second Touchable */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("UpgrateToPremimum")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconSubscriptionPlan} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>My subscription plan</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                            View and manage your current subscription.
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* Border Divider */}
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} >
                </View>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("Invoice")}
                    style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconSubscription} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>Invoice</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                            Access your billing history and download invoices.
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`border-b w-full border-gray-300 z-40 my-2`} ></View>
                <TouchableOpacity style={tw`flex-row items-center gap-2 py-3`}>
                    <View style={tw`w-[20%] items-center`}>
                        <SvgXml xml={IconCancelSub} />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>Cancel subscription</Text>
                        <Text style={tw`text-black font-SatoshiRegular`}>
                            Stop your subscription plan at any time.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={tw`bg-white w-full rounded-2xl mt-4 items-center p-4`}>
                <Image source={require('../../assets/Imgages/Drawer/billingSub.png')} />
                <Text style={tw`font-SatoshiBold text-black text-lg`}>Your data is protected</Text>
                <Text style={tw`font-SatoshiRegular mt-1 text-black text-xs text-center`}>Your data belongs to you. We ensure it’s protected, never shared, and you can delete it at anytime.</Text>
            </View>
            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    )
}

export default BillingAndSubscription

const styles = StyleSheet.create({})