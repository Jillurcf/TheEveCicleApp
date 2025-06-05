import {
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ScrollView,
  Button,
} from 'react-native';
import React, { useState } from 'react';

import { launchImageLibrary } from 'react-native-image-picker';
import { SvgXml } from 'react-native-svg';

import { SceneMap, TabView } from 'react-native-tab-view';
import tw from '../../lib/tailwind';
import { IconCamera, IconCloseEye, IconEnvelope, IconLeftArrow, IconLock, IconOpenEye, IconRightArrrow } from '../../assets/Icons';
import InputText from '../../component/InputText';
import TButton from '../../component/TButton';
import NormalModal from '../../component/NormalModal';




const AccountSettings = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [logoutConfirmationModalVisible, setLogoutConfirmationModalVisible] =
    useState(false);

  const selectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.assets?.length && result.assets[0].uri) {
      setProfileImage(result.assets[0].uri);
    }
  };



  return (
    <ScrollView style={tw`flex-1 bg-[#E8F6F6] p-4`}>
      <View style={tw`flex-row justify-between`}>
        <View style={tw`w-[10%]`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <SvgXml xml={IconLeftArrow} />
          </TouchableOpacity>
        </View>
        <View style={tw`w-[80%%] items-center`}>
          <Text style={tw`font-SatoshiBold text-[#121221] text-xl`}>Accounts settings</Text>
        </View>
        <View style={tw`w-[10%]`}></View>
      </View>

      <TouchableOpacity onPress={selectImage} style={tw`items-center mt-8`}>
        <View>
          <Image
            source={
              profileImage
                ? { uri: profileImage }
                : require('../../assets/Imgages/Profile/pfp.png')
            }
            style={tw`w-18 h-18 rounded-full`}
          />
          <TouchableOpacity style={tw`absolute bottom-0 right-0`}>
            <SvgXml xml={IconCamera} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View style={tw`mt-1 items-center`}>
        <Text style={tw`text-primaryBase text-lg`}>Aisha Rahman</Text>
        <Text style={tw`text-primaryBase text-xs`}>aisha@gmail.com</Text>
      </View>

      <View style={tw`my-6`}>
        <InputText
          containerStyle={tw`bg-white`}
          style={tw`bg-white`}
          placeholder="Enter your full name"
          placeholderColor="#949494"
          label="Name"
          // iconLeft={IconEnvelope}
          onChangeText={setEmail}
          value={email}
        />
        <InputText
          containerStyle={tw`bg-white`}
          style={tw`bg-white`}
          placeholder="Enter your email"
          placeholderColor="#949494"
          label="E-mail"
          iconLeft={IconEnvelope}
          onChangeText={setEmail}
          value={email}
        />
        {/* <InputText
          containerStyle={tw`bg-white`}
          placeholder="Enter your password"
          placeholderColor="#949494"
          label="Password"
          iconLeft={IconLock}
          iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
          onChangeText={(text)=>setPassword(text)}
          value={password}
          isShowPassword={isShowPassword}
          rightIconPress={() => setIsShowPassword(!isShowPassword)}
        /> */}

        <View style={tw`w-full mt-6`}>
          <TButton containerStyle={tw`bg-[#4FA8A8] w-full`} title='Save' />
        </View>
        <View style={tw`w-full mt-6`}>
          <TButton

            onPress={() => setLogoutConfirmationModalVisible(true)}
            containerStyle={tw`bg-[#E8F6F6] w-full`} title='Update password' titleStyle={tw`text-[#2B9696]`} />
        </View>
      </View>
      <NormalModal
        layerContainerStyle={tw`justify-end animate-bounce`} // Ensure modal content aligns at the bottom
        containerStyle={tw`bg-white rounded-t-2xl p-6`} // Styling the modal itself
        visible={logoutConfirmationModalVisible}
        setVisible={setLogoutConfirmationModalVisible}
      >
        <View>
          <Text style={tw`text-black text-2xl font-SatoshiBold mb-6`}>
            Update Password
          </Text>

          <InputText
            containerStyle={tw`bg-white`}
            placeholder="Enter your password"
            placeholderColor="#949494"
            label="current Password"
            iconLeft={IconLock}
            iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
            onChangeText={(text) => setPassword(text)}
            value={password}
            isShowPassword={isShowPassword}
            rightIconPress={() => setIsShowPassword(!isShowPassword)}
          />
          <InputText
            containerStyle={tw`bg-white`}
            placeholder="Enter your password"
            placeholderColor="#949494"
            label="New Password"
            iconLeft={IconLock}
            iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
            onChangeText={(text) => setPassword(text)}
            value={password}
            isShowPassword={isShowPassword}
            rightIconPress={() => setIsShowPassword(!isShowPassword)}
          />
          <InputText
            containerStyle={tw`bg-white`}
            placeholder="Enter your password"
            placeholderColor="#949494"
            label="Confirm Password"
            iconLeft={IconLock}
            iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
            onChangeText={(text) => setPassword(text)}
            value={password}
            isShowPassword={isShowPassword}
            rightIconPress={() => setIsShowPassword(!isShowPassword)}
          />

          <View style={tw`mt-6`}>
            <TButton
              onPress={() => setLogoutConfirmationModalVisible(false)}
              containerStyle={tw`bg-[#4FA8A8] w-full`} title='Save changes' />
          </View>
        </View>
      </NormalModal>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" />
    </ScrollView>
  );
};

export default AccountSettings;
