import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { SvgXml } from 'react-native-svg';
import tw from 'twrnc';
import { IconLeftArrow } from '../../../assets/Icons';

const SECTIONS = [
  {
    title: 'How can I reset my password?',
    content: 'To reset your password, go to the login page and tap "Forgot password".',
  },
  {
    title: 'How do I contact support?',
    content: 'You can contact support through the Help section in your profile.',
  },
];

const Faq = ({ navigation }: { navigation: any }) => {
  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section, _, isActive) => (
    <View style={tw`bg-white px-4 py-3 border-b border-gray-200`}>
      <Text style={tw`text-base font-semibold text-black`}>
        {section.title}
      </Text>
    </View>
  );

  const renderContent = (section) => (
    <View style={tw`bg-white px-4 py-3`}>
      <Text style={tw`text-gray-700`}>{section.content}</Text>
    </View>
  );

  const updateSections = (sections) => {
    setActiveSections(sections);
  };
 
  return (
    <ScrollView contentContainerStyle={tw`flex-grow bg-[#E8F6F6] px-4 py-5`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between mb-5`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={IconLeftArrow} width={24} height={24} />
        </TouchableOpacity>
        <Text style={tw`font-SatoshiBold text-lg text-black`}>FAQs</Text>
        <View style={tw`w-6`} /> 
      </View>

      {/* Accordion */}
      <View style={tw`bg-white rounded-xl overflow-hidden shadow-sm`}>
        <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={updateSections}
          underlayColor="transparent"
        />
      </View>
    </ScrollView>
  );
};

export default Faq;
