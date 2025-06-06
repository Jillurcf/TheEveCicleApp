import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { SvgXml } from 'react-native-svg';
import tw from 'twrnc';
import { IconDownArrow, IconLeftArrow } from '../../assets/Icons';

const data = [
    {
        question: 'What is The Eve Cycle app, and how does it work?',
        answer: 'The Eve Cycle is a menstrual cycle tracking app...',
    },
    {
        question: 'Is my personal data safe with The Eve Cycle?',
        answer: 'Yes, your data is encrypted and securely stored...',
    },
];

const GeneralInformationFaq = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => `${item.question}-${index}`}
            renderItem={({ item, index }) => (
                <View style={tw`bg-white rounded-lg p-4 mb-3`}>
                    <TouchableOpacity onPress={() => setExpandedIndex(index === expandedIndex ? null : index)}>
                        <View style={tw`flex-row justify-between w-[98%]`}>
                            <View style={tw`w-[95%]`}>
                                <Text style={tw` font-semibold text-[#3A3A47]`}>{item.question}</Text>
                            </View>
                            <View style={tw`w-[5%]`}>
                                <SvgXml xml={IconDownArrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={expandedIndex !== index}>
                        <Text style={tw`mt-2 text-[#3A3A47]`}>{item.answer}</Text>
                    </Collapsible>
                </View>
            )}
        />
    );
};

export default GeneralInformationFaq;
