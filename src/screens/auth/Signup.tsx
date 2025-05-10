import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import {
  IconApple,
  IconCloseEye,
  IconEnvelope,
  IconFacebook,
  IconGoogle,
  IconInstaGram,
  IconLeftArrow,
  IconLock,
  IconOpenEye,
  IconUser,
} from '../../assets/Icons';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import { Checkbox } from 'react-native-ui-lib';
import TButton from '../../component/TButton';

type Props = {};

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  //   const [googlelogin] = useGoogleloginMutation();
  const [googleUser, setGoogleUser] = useState();
  return (
    <View style={tw`flex-1 bg-[#E8F6F6] px-[4%]`}>
      <View style={tw`my-6`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={IconLeftArrow} />
        </TouchableOpacity>
        <Text style={tw`font-SatoshiBold text-[34px] text-[#121221] mt-4`}>
          Join The Sanctum
        </Text>
        <Text style={tw`font-SatoshiRegular text-[16px] text-[#3A3A47] mt-2`}>
          Sign up to start your seasons journey.
        </Text>
      </View>
      <View>
        <InputText
          containerStyle={tw`bg-white h-13 rounded-3xl`}
          style={tw`bg-white`}
          placeholder={'Enter your full name'}
          placeholderColor={'#949494'}
          label={'Full name'}
          iconLeft={IconUser}
          onChangeText={(text: any) => setEmail(text)}
        />
        <InputText
          containerStyle={tw`bg-white h-13 rounded-3xl`}
          style={tw`bg-white text-xs`}
          placeholder={'Enter your email'}
          placeholderColor={'#949494'}
          label={'E-mail'}
          iconLeft={IconEnvelope}
          onChangeText={(text: any) => setEmail(text)}
        />
        <InputText
          containerStyle={tw`bg-white h-13 rounded-3xl`}
          placeholder={'Enter your password'}
          placeholderColor={'#949494'}
          label={'Password'}
          iconLeft={IconLock}
          iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
          onChangeText={(text: any) => setPassword(text)}
          isShowPassword={!isShowPassword}
          rightIconPress={() => setIsShowPassword(!isShowPassword)}
        />
        <View style={tw`flex-row items-center justify-between`}>
          <TouchableOpacity
            onPress={() => {
              {
                setIsCheck(!isCheck);
              }
            }}
            style={tw`flex-row items-center gap-2`}>
            {/* <Checkbox
                    color={isCheck ? '#064145' : '#A8A8A8'}
                    value={isCheck}
                    size={20}
                  /> */}
            {/* <Text style={tw`text-sm text-subT font-SatoshiNormal`}>
                    Ricordati di me
                  </Text> */}
          </TouchableOpacity>
        </View>
        {/* Checkbox Section */}
        <View style={tw`flex-row items-center gap-2 mt-4`}>
          <Checkbox
            value={isCheck}
            onValueChange={() => setIsCheck(!isCheck)}
            color={isCheck ? '#064145' : '#A8A8A8'}
            size={20}
          />
          <Text style={tw`text-[12px] text-[#24272B] font-SatoshiRegular`}>
            Agree to Terms & Conditions and Privacy Policy
          </Text>
        </View>

        <View style={tw`items-center justify-center mt-6`}>
          <TButton
            onPress={() => navigation.navigate("FirstStep")}
            containerStyle={tw`bg-[#4FA8A8] h-[50px] rounded-3xl w-[100%]  `}
            title="Next"
            titleStyle={tw`font-SatoshiRegular text-sm`}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={tw`items-center justify-center flex`}>
          <Text style={tw`font-SatoshiMedium my-4`}>
            Already have an account?{' '}
            <Text style={tw`text-[#2B9696]`}>Sign in</Text>{' '}
          </Text>
        </TouchableOpacity>
        <View style={tw`my-6 flex-row items-center gap-2`}>
          <View style={tw`bg-gray-200 h-[1px] flex-1`} />
          <Text style={tw`text-subT text-xs font-SatoshiBold`}>
            or continue with
          </Text>
          <View style={tw`bg-gray-200 h-[1px] flex-1`} />
        </View>
        <View style={tw`flex-row gap-6 justify-center items-center`}>
          <TouchableOpacity
            //   onPress={handleGoogleLogin}
            style={tw`bg-white p-2 rounded-full`}>
            <SvgXml xml={IconGoogle} />

          </TouchableOpacity>
          <TouchableOpacity
            //   onPress={handleGoogleLogin}
            style={tw`bg-white p-2 rounded-full`}>
            <SvgXml xml={IconApple} />

          </TouchableOpacity>
          <TouchableOpacity
           style={tw`bg-white p-2 rounded-full`}
            >
            <SvgXml xml={IconFacebook} />

          </TouchableOpacity>
          <TouchableOpacity
           style={tw`bg-white p-2 rounded-full`}>
            <SvgXml xml={IconInstaGram} />

          </TouchableOpacity>
        </View>

      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
