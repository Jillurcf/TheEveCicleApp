import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg';

import tw from 'twrnc';
import { IconLeftArrow } from '../assets/Icons';
import NormalModal from '../component/NormalModal';
import TButton from '../component/TButton';

const linkedDevices = [
    {
        id: '1',
        name: 'Ahmad (Spouse)',
        email: '123@hotmail.com',
        date: '02/08/2025 at 10:30 am',
    },
    {
        id: '2',
        name: 'Ahmad (My village)',
        email: '123@hotmail.com',
        date: '02/08/2025 at 10:30 am',
    },
    {
        id: '3',
        name: 'Ahmad (My village)',
        email: '123@hotmail.com',
        date: '02/08/2025 at 10:30 am',
    },
    {
        id: '4',
        name: 'Ahmad (My village)',
        email: '123@hotmail.com',
        date: '02/08/2025 at 10:30 am',
    },
];

const LinkedDevicesScreen = ({ navigation }) => {
    const [logoutConfirmationModalVisible, setLogoutConfirmationModalVisible] =
        useState(false);
    const renderDevice = ({ item }: any) => (
        <View style={tw`flex-row justify-between items-start bg-white rounded-md p-4 mb-2 shadow-sm`}>
            <View style={tw`flex-row`}>
                {/* <Icon name="smartphone" size={20} color="#666" style={tw`mr-3 mt-1`} /> */}
                <View>
                    <Text style={tw`text-black font-semibold`}>{item.name}</Text>
                    <Text style={tw`text-gray-600 text-sm`}>{item.email}</Text>
                    <Text style={tw`text-gray-400 text-xs mt-1`}>
                        Device linked on {item.date}
                    </Text>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={tw`text-[#007b83] font-semibold`}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={tw`flex-1 bg-[#e6f5f4] px-4 pt-6`}>
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Linked devices</Text>
                <View></View>
            </View>
            <View style={tw`mt-12`}>
                <FlatList
                    data={linkedDevices}
                    renderItem={renderDevice}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <TouchableOpacity
                onPress={() => setLogoutConfirmationModalVisible(true)}
                style={tw`mt-6 mb-4`}>
                <Text style={tw`text-center text-red-600 font-semibold text-sm`}>
                    Sign Out Of All Devices
                </Text>
            </TouchableOpacity>
            <NormalModal
                layerContainerStyle={tw`justify-end animate-bounce`} // Ensure modal content aligns at the bottom
                containerStyle={tw`bg-white rounded-t-2xl p-6`} // Styling the modal itself
                visible={logoutConfirmationModalVisible}
                setVisible={setLogoutConfirmationModalVisible}
            >
                <View>
                    <Text style={tw`text-black text-2xl text-center font-SatoshiBold mb-2`}>
                        Remove devices
                    </Text>
                    <Text style={tw`text-black text-center font-SatoshiBold mb-2`}>
                        Removing this device will revoke their access to your activity and shared data
                    </Text>

                    <View style={tw`mt-2 flex-row justify-between items-center`}>
                        <View style={tw``}>
                            <TButton titleStyle={tw`text-[#2B9696] font-SatoshiBold`} title='Remove' containerStyle={tw`bg-[#EAF5F5]`} />
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
        </View>
    );
};

export default LinkedDevicesScreen;
