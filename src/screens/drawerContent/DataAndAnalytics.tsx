import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../assets/Icons'

type Props = {}

const DataAndAnalytics = ({ navigation }: { navigation: any }) => {
    return (
        < ScrollView style={tw`flex-1 bg-[#E8F6F6] p-4`}>
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Data & analytics</Text>
                <View></View>
            </View>
            <View style={tw`bg-white w-full rounded-lg mt-8 p-4`}>
                <Text style={tw`font-SatoshiBold`}>Personal information</Text>
                <Text style={tw`font-SatoshiBold mt-1`}>Aisha Rahman</Text>
                <Text style={tw`font-SatoshiBold mt-1`}>24 years old</Text>
                <Text style={tw`font-SatoshiBold mt-1`}>aisharahman@gmail.com</Text>
                <Text style={tw`font-SatoshiBold mt-1`}>14 February, 2025</Text>
            </View>
            <View style={tw`bg-white w-full rounded-lg p-4  mt-4`}>
                <Text style={tw`font-SatoshiBold`}>Cycle Report</Text>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Current phase</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Ovulation</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Upcoming phase</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Folicular</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Period Type</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Regular</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Last period</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>5 Jan, 2025</Text>
                </View>
                
            </View>
            <View style={tw`bg-white w-full rounded-lg p-4  mt-4`}>
                <Text style={tw`font-SatoshiBold`}>Log Report</Text>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Feelings today</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Self-critical</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Symptoms</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Fatigue, headache</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Verginal discharge</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Egg white</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Winter flow</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Heavy</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Day (activities)</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Prayer, exercise</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Food and nutrition</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Junck foods</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold mt-1`}>Digestion</Text>
                    <Text style={tw`font-SatoshiBold mt-1`}>Bloating</Text>
                </View>
                
            </View>
            <View>
            <TouchableOpacity
        style={tw`bg-[#4FA8A8] py-3 rounded-full mt-6 items-center`}
        // onPress={downloadPDF} 
      >
        <Text style={tw`text-white font-bold`}>Download PDF</Text>
      </TouchableOpacity>
            </View>
            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    )
}

export default DataAndAnalytics

const styles = StyleSheet.create({})