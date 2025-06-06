import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import tw from 'twrnc';
import { SvgXml } from 'react-native-svg';
import { IconCross, IconLeftArrow } from '../../../assets/Icons';
import NormalModal from '../../../component/NormalModal';

const defaultProfile = require('../../../assets/Imgages/Profile/pfp.png');
const support = require('../../../assets/Imgages/Profile/support.png');

const CustomerSupport = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hi, I’m having trouble understanding how to track my',
      time: '12:34',
      sender: 'user',
      image: defaultProfile,
    },
    {
      id: '2',
      text: 'Hello! 😊 Sure, I’d be happy to help. Are you currently' ,
      time: '12:34',
      sender: 'bot',
      image: support,
    },
    {
      id: '3',
      text: 'Yes, but since my periods are irregular, I’m not sure how accurate the predictions will be.',
      time: '12:40',
      sender: 'user',
    },
    {
      id: '4',
      text: 'Great question! The Eve Cycle is designed to adjust predictions for irregular cycles. The more period data you log, the better the app gets at understanding your unique patterns.',
      time: '12:44',
      image: support,
    },
    {
      id: '5',
      text: 'Oh, that’s good to know. Is there a specific way I should log the data?',
      time: '12:54',
      sender: 'user',
    },
  ]);

  const [mediaUri, setMediaUri] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const toggleModal = () => setOpenModal(prev => !prev);

  const sendMessage = () => {
    if (text.trim() || mediaUri) {
      const newMessage = {
        id: Date.now().toString(),
        text,
        sender: 'user',
        createdAt: new Date(),
        image: mediaType === 'image' ? mediaUri : null,
        video: mediaType === 'video' ? mediaUri : null,
      };
      setMessages(prev => [...prev, newMessage]);
      setText('');
      setMediaUri(null);
      setMediaType(null);
    }
  };

  return (
    <View style={tw`flex-1 bg-[#E8F6F6]`}>
      <View style={tw`px-[4%] flex-row justify-between items-center my-4`}>
        <View style={tw`w-[10%]`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={IconLeftArrow} />
          </TouchableOpacity>
        </View>
        <View style={tw`w-[80%] items-center`}>
          <Text style={{ fontFamily: 'Satoshi-Bold', fontSize: 18, color: '#121221' }}>
            Customer support
          </Text>
        </View>
        <View style={tw`w-[10%]`}>
          <TouchableOpacity onPress={toggleModal}>
            {/* Placeholder for settings icon */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const isUser = item.sender === 'user';

          return (
            <View
              style={tw`mb-3 flex-row ${isUser ? 'justify-end' : 'justify-start'
                }`}
            >
              {/* Receiver Profile Image (left side) */}
              {!isUser && (
                <Image
                  source={
                    item.image
                      ? typeof item.image === 'number'
                        ? item.image
                        : { uri: item.image }
                      : defaultProfile
                  }
                  style={tw`w-10 h-10 rounded-full mr-6`}
                />
              )}

              {/* Message Card */}
              <View
                style={[
                  tw`p-3 rounded-lg max-w-[70%]`,
                  isUser ? tw`bg-blue-200` : tw`bg-green-200`,
                ]}
              >
                <Text style={tw`font-MontserratBold text-sm text-black capitalize mb-1`}>
                  {isUser ? 'You' : 'Support'}
                </Text>

                {/* Media */}
                {item.image && typeof item.image === 'string' && (
                  <Image
                    source={{ uri: item.image }}
                    style={tw`h-40 w-full rounded-lg my-2`}
                    resizeMode="cover"
                  />
                )}
                {item.video && (
                  <Video
                    source={{ uri: item.video }}
                    style={tw`h-40 w-full rounded-lg my-2`}
                    resizeMode="cover"
                    controls
                  />
                )}

                {/* Message Text & Time */}
                <Text style={tw`text-black font-MontserratRegular`}>{item.text}</Text>
                <Text style={tw`text-xs text-black mt-2`}>
                  {item.createdAt ? new Date(item.createdAt).toLocaleTimeString() : item.time}
                </Text>
              </View>

              {/* Sender Profile Image (right side) */}
              {isUser && (
                <Image
                  source={
                    item.image
                      ? typeof item.image === 'number'
                        ? item.image
                        : { uri: item.image }
                      : defaultProfile
                  }
                  style={tw`w-10 h-10 rounded-full ml-2`}
                />
              )}
            </View>
          );
        }}

        contentContainerStyle={tw`p-4`}
      />

      {/* Input Field & Send Button */}
      <View style={tw`border-t border-gray-300 p-3`}>
        <View style={tw`flex-row items-center gap-1`}>
          <TextInput
            style={tw`flex-1 h-10 border text-black border-gray-400 rounded-2xl px-3`}
            placeholder="Type a message"
            placeholderTextColor={'black'}
            cursorColor={'black'}
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity onPress={sendMessage} style={tw`ml-2`}>
            <Text style={tw`text-[#2B9696] font-SatoshiBold`}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Preview Media */}
      {mediaUri && mediaType === 'image' && (
        <View style={tw`flex-row items-center p-3`}>
          <Image
            source={{ uri: mediaUri }}
            style={tw`h-20 w-20 rounded-lg`}
            resizeMode="cover"
          />
          <Button title="Remove" onPress={() => setMediaUri(null)} />
        </View>
      )}
      {mediaUri && mediaType === 'video' && (
        <View style={tw`flex-row items-center p-3`}>
          <Video
            source={{ uri: mediaUri }}
            style={tw`h-40 w-full rounded-lg`}
            resizeMode="cover"
            controls
          />
          <Button title="Remove" onPress={() => setMediaUri(null)} />
        </View>
      )}

      {/* Modal */}
      <NormalModal
        visible={openModal}
        setVisible={setOpenModal}
        animationType="fade"
        scrollable={true}
        layerContainerStyle={{ padding: 20 }}
        containerStyle={{ borderRadius: 10 }}
      >
        <View>
          <View style={tw`flex-row w-full justify-end`}>
            <TouchableOpacity
              style={tw`text-red-700 border border-red-800 items-center justify-center h-6 w-6 rounded-full`}
              onPress={toggleModal}
            >
              <SvgXml color={'red'} xml={IconCross} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={tw`font-SatoshiBold text-black text-xl`}>Delete Conversation</Text>
            <Text style={tw`font-SatoshiBold text-black text-xl py-4`}>Block</Text>
            <Text style={tw`font-SatoshiBold text-red-900 text-xl`}>Delete</Text>
          </View>
        </View>
      </NormalModal>

      <StatusBar translucent={false} />
    </View>
  );
};

export default CustomerSupport;
