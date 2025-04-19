import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Button, StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg';

import tw from 'twrnc'; // or use your own styles if not using Tailwind
import { IconLeftArrow, IconTick } from '../assets/Icons';
import NormalModal from '../component/NormalModal';
import TButton from '../component/TButton';

const CancelSubscription = ({ navigation }: { navigation: any }) => {
    const [logoutConfirmationModalVisible, setLogoutConfirmationModalVisible] =
        useState(false);
    return (
        <ScrollView style={tw`flex-1 bg-[#E1F2F1] px-4`}>
            {/* Header */}
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Billing & subscription</Text>
                <View></View>
            </View>
            {/* Subscription Card */}
            <View style={tw`bg-white p-4 rounded-2xl shadow-md mt-12`}>
                <View style={tw`flex-row justify-between items-center mb-3`}>
                    <View>
                        <View style={tw`flex-row items-center gap-2`}>
                            <Image style={tw`w-8 h-8`} source={require('../assets/Imgages/SplashIcon.png')} />
                            <Text style={tw`text-purple-600 font-bold`}>Premium</Text>
                        </View>
                        <Text style={tw`text-xs text-gray-400`}>Current Subscription</Text>
                    </View>
                    <Text style={tw`text-sm font-semibold`}>£29.99/year</Text>
                </View>

                {/* Benefits List */}
                {[
                    'Dhikr and meditations',
                    'Articles and wellness guides',
                    'Detailed data & insights',
                    'Advanced cycle predictions',
                    'Downloadable data',
                ].map((benefit, index) => (
                    <View key={index} style={tw`flex-row items-center mb-2`}>
                        <SvgXml xml={IconTick} />
                        <Text style={tw`ml-2 text-sm text-gray-700`}>{benefit}</Text>
                    </View>
                ))}

                {/* Next billing date */}
                <Text style={tw`text-xs text-gray-500 mt-2`}>
                    Next Billing Date: 24 Aug, 2025
                </Text>
            </View>

            {/* Cancel Button */}
            <TouchableOpacity
                onPress={() => setLogoutConfirmationModalVisible(true)}
                style={tw`bg-teal-600 mt-10 py-3 rounded-full shadow-lg`}>
                <Text style={tw`text-white text-center font-semibold`}>Cancel Subscriptions</Text>
            </TouchableOpacity>
            <NormalModal
                layerContainerStyle={tw`justify-end animate-bounce`} // Ensure modal content aligns at the bottom
                containerStyle={tw`bg-white rounded-t-2xl p-6`} // Styling the modal itself
                visible={logoutConfirmationModalVisible}
                setVisible={setLogoutConfirmationModalVisible}
            >
                <View>
                    <Text style={tw`text-black text-2xl text-center font-SatoshiBold mb-2`}>
                        Thinking of leaving?
                    </Text>
                    <Text style={tw`text-black text-center font-SatoshiBold mb-2`}>
                        My Note
                        We’re sorry to see you go! Remember, you can always rejoin us and continue your cycle tracking whenever you’re ready.
                        This is a hint text to help user.
                    </Text>

                    <View style={tw`mt-2 flex-row justify-between items-center`}>
                        <View style={tw``}>
                            <TButton titleStyle={tw`text-[#2B9696] font-SatoshiBold`} title='Yes' containerStyle={tw`bg-[#EAF5F5]`} />
                        </View>
                        <View style={tw` mt-2`}>
                            <TButton
                                onPress={() => setLogoutConfirmationModalVisible(false)}
                                titleStyle={tw`font-SatoshiBold`}
                                title='Not now'
                                containerStyle={tw`bg-[#4FA8A8]`} />
                        </View>
                    </View>
                </View>
            </NormalModal>
            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    );
};

export default CancelSubscription;
