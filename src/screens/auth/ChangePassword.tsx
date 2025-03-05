import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import {SvgXml} from 'react-native-svg';
import {
  IconCloseEye,
  IconEnvelope,
  IconGoogle,
  IconLeftArrow,
  IconLock,
  IconOpenEye,
} from '../../assets/Icons';
import Button from '../../component/Button';
import InputText from '../../component/InputText';

type Props = {};

const ChangePassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  //   const [googlelogin] = useGoogleloginMutation();
  const [googleUser, setGoogleUser] = useState();
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
                Use atleast 6 characters
              </Text>
            </View>
            <View style={tw`flex-row items-center gap-2`}>
              <View style={tw`bg-black h-2 w-2 rounded-full`}></View>
              <Text style={tw`font-SatoshiRegular my-4  `}>
                Use mix of letters, numbers and a special {'\n'}charcter (e.g. :
                #$!%)
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
          </View>
        </View>
        <Button
          style={tw`text-white`}
          containerStyle={tw`mt-6 bg-[#4FA8A8] rounded-2xl`}
          title={'Save new password'}
          titleSyle={tw`text-[#FFFFFF]`}
          // onPress={handleLogin}
          // onPress={() => {
          //   navigation?.navigate('Drawer');
          // }}
        />
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
