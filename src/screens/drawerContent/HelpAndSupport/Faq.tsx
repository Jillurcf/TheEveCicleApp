import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from 'twrnc';
import { IconLeftArrow } from '../../../assets/Icons';
import GeneralInformationFaq from '../../../component/faq/GeneralInformation';

// Import category components

// import AccountIssueFaq from './AccountIssueFaq';
// import PaymentFaq from './PaymentFaq';
// import SecurityFaq from './SecurityFaq';

const categories = ['General Information', 'Account issue', 'Payment', 'Security'];

const Faq = ({ navigation }: {navigation: any}) => {
  const [selectedCategory, setSelectedCategory] = useState('General Information');

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 'General Information':
        return <GeneralInformationFaq />;
      // case 'Account issue':
      //   return <AccountIssueFaq />;
      // case 'Payment':
      //   return <PaymentFaq />;
      // case 'Security':
      //   return <SecurityFaq />;
      default:
        return null;
    }
  };

  return (
    <View style={tw`flex-1 bg-[#E8F6F6] p-4`}>
      {/* Header */}
      <View style={tw`flex-row items-center mb-4`}>
        <View style={tw`w-[10%]`}>
          <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={tw`mr-4`}>
            <SvgXml xml={IconLeftArrow} />
          </TouchableOpacity>
        </View>
      <View style={tw`w-[80%] items-center`}>
          <Text style={tw`text-lg font-bold text-[#121221]`}>FAQs</Text>
      </View>
      <View style={tw`w-[10%]`}></View>
      </View>

      {/* Category Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`-mb-120`}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={tw`px-2 h-12 mx-0.5 rounded-full items-center ${selectedCategory === category ? 'bg-[#4FA8A8]' : 'bg-white'
              } border border-gray-300`}
          >
            <Text style={tw`${selectedCategory === category ? 'text-white' : 'text-[#646464]'} mt-3 font-SatoshiRegular`}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* FAQ List for Selected Category */}
      {renderCategoryComponent()}
    </View>
  );
};

export default Faq;
