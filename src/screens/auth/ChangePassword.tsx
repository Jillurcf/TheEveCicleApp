import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import {SvgXml} from 'react-native-svg';
import {
  IconCloseEye,
  IconLeftArrow,
  IconLock,
  IconOpenEye,
} from '../../assets/Icons';
import Button from '../../component/Button';
import InputText from '../../component/InputText';

const ChangePassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    // Show success modal
    setModalVisible(true);
  };

  return (
    <View style={tw`flex-1 bg-[#E8F6F6] px-[4%]`}>
      <View style={tw`flex-col justify-between h-[90%]`}>
        <View>
          <View style={tw`my-6`}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={tw`flex-row items-center gap-4`}>
                <SvgXml xml={IconLeftArrow} />
                <Text style={tw`font-SatoshiRegular text-lg`}>
                  Please create a new password
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={tw`font-SatoshiRegular text-2xl text-black my-4`}>
              Enter a new password {'\n'}for your account
            </Text>
            <View style={tw`flex-row items-center gap-2`}>
              <View style={tw`bg-black h-2 w-2 rounded-full`}></View>
              <Text style={tw`font-SatoshiRegular `}>
                Use at least 6 characters
              </Text>
            </View>
            <View style={tw`flex-row items-center gap-2`}>
              <View style={tw`bg-black h-2 w-2 rounded-full`}></View>
              <Text style={tw`font-SatoshiRegular my-4  `}>
                Use mix of letters, numbers, and a special {'\n'}character (e.g.
                : #$!%)
              </Text>
            </View>
          </View>
          <View>
            <InputText
              containerStyle={tw`bg-white`}
              placeholder={'Enter your password'}
              placeholderColor={'#949494'}
              label={'Password'}
              iconLeft={IconLock}
              iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
              onChangeText={(text: any) => setPassword(text)}
              isShowPassword={!isShowPassword}
              rightIconPress={() => setIsShowPassword(!isShowPassword)}
            />
            <InputText
              containerStyle={tw`bg-white`}
              placeholder={'Enter your password'}
              placeholderColor={'#949494'}
              label={'Password'}
              iconLeft={IconLock}
              iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
              onChangeText={(text: any) => setPassword(text)}
              isShowPassword={!isShowPassword}
              rightIconPress={() => setIsShowPassword(!isShowPassword)}
            />
          </View>
        </View>
        <Button
          style={tw`text-white`}
          containerStyle={tw`mt-6 bg-[#4FA8A8] rounded-2xl`}
          title={'Save new password'}
          titleSyle={tw`text-[#FFFFFF]`}
          onPress={handleSave}
        />
      </View>
      <StatusBar translucent={false} />

      {/* ✅ Success Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={tw`flex-1 justify-center items-center bg-black/50`}>
          <View style={tw`bg-white w-[85%] p-6 rounded-2xl shadow-lg`}>
            <View style={tw`items-center`}>
              <SvgXml
                xml={`<svg fill="#4CAF50" width="80" height="80" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="green" />
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>`}
              />
              <Text style={tw`text-2xl font-bold text-center my-4`}>
                You’re All Set!
              </Text>
              <Text style={tw`text-center text-gray-600`}>
                Your password has been changed successfully!
              </Text>
            </View>
            <Button
              title="OK"
              containerStyle={tw`mt-6 bg-[#4FA8A8] rounded-2xl`}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChangePassword;
