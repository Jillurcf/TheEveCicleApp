import { StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../assets/Icons'
import tw from '../lib/tailwind'

type Props = {}
const switchOptions = [
    { id: 'periodAlert', label: 'Upcoming period alerts' },
    { id: 'Cyclemilestones', label: 'Cycle milestones' },
    { id: 'Cycleendreminders', label: 'Cycle end reminders' },
    { id: 'Missedlogreminders', label: 'Missed log reminders' },
    { id: 'Partnerconnectionstatus', label: 'Partner connection status' },
    { id: 'Customlogreminders', label: 'Custom log reminders' },
    { id: 'Appupdatesandnewfeatures', label: 'App updates and new features' },
];
const Reminders = ({ navigation }: { navigation: any }) => {
    const [switchStates, setSwitchStates] = useState({
        periodAlert: false,
        fertilityAlert: false,
        meditationReminder: false,
        wellnessTips: false,
    });
    const toggleSwitch = (id: string) => {
        setSwitchStates(prev => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <View style={tw`flex-1 bg-[#e6f5f4] px-4 pt-6`}>
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Reminders</Text>
                <View></View>
            </View>
            <View style={tw`bg-white p-4 rounded-xl shadow-sm mt-8`}>
                {switchOptions.map((item, index) => (
                    <View
                        key={item.id}
                        style={[
                            tw`flex-row justify-between items-center py-4`, // padding bottom for spacing
                            index !== switchOptions.length - 1 && tw`border-b border-gray-200`, // apply border unless it's last
                        ]}
                    >
                        <Text style={tw`font-SatoshiRegular text-black`}>
                            {item.label}
                        </Text>
                        <Switch
                            value={switchStates[item.id]}
                            onValueChange={() => toggleSwitch(item.id)}
                            onColor={'#60c5ba'}
                            offColor={'#ccc'}
                            thumbColor={'#fff'}
                        />
                    </View>
                ))}
            </View>

            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </View>
    )
}

export default Reminders

const styles = StyleSheet.create({})