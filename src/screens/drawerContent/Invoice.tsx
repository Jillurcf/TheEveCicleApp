import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../assets/Icons'
import InvoiceContent from '../../component/drawerContent/invoice/InvoiceContent'

type Props = {}



const Invoice = ({ navigation }: { navigation: any }) => {
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
            <Text style={tw`text-base font-semibold text-gray-800 mb-2 mt-8`}>
                View all your billing history and invoices
            </Text>

            <InvoiceContent />
        </ScrollView>
    )
}

export default Invoice

const styles = StyleSheet.create({})
